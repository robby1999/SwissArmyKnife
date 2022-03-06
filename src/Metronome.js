import React, { Component } from 'react';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, AppRegistry } from 'react-native';

class Metronome extends Component {

    constructor(props) {
        super(props);
        this.audioPlayer = new Audio.Sound();
        this.state = {
        playing: false,
        count: 0,
        bpm: 120,
        beatsPerMeasure: 4,
        click: false,
        };

    }

    async componentDidMount() {
        Audio.setAudioModeAsync({
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            shouldDuckAndroid: false,
            staysActiveInBackground: false,
            playsThroughEarpieceAndroid: true
        });
    }

    startStop = async () => {
        if(this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        } else {
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
            this.setState({
                count: 0,
                playing: true
            }, this.playClick);
        }
    }

    playClick = async () => {
      const { count, beatsPerMeasure } = this.state;
      // The first beat will have a different sound than the others
      if(count % beatsPerMeasure === 0) {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/click2.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
        }
      } else {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/click1.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
        }
      }
      // Keep track of which beat we're on
      this.setState(state => ({
        count: (state.count + 1) % state.beatsPerMeasure
      }));
    }

    // Stops sound playing if home button is pressed
    goHome = async () => {
        if(this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        }
        this.props.navigation.goBack()
    }

    render() {
        const { playing, bpm} = this.state;

        return (
            <View style={styles.metronome}>
                <Text style={styles.logo}>Metronome</Text>
                <View style={styles.slider}>
                    <Slider
                        minimumValue={50}
                        maximumValue={250}
                        step={1}
                        minimumTrackTintColor="#ffffff"
                        thumbTintColor="#ff7f17"
                        value={this.state.bpm}
                        onValueChange={bpm => this.setState({bpm: bpm})}
                    />
                    <Text style={styles.text}>{this.state.bpm} BPM</Text>
                </View>
                <TouchableOpacity  onPress={this.startStop}
                  style={styles.Button}>
                  <Text style={styles.buttonText}>{(this.state.playing) ? "Stop" : "Play"}</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.goHome}
                  style={styles.Button}>
                  <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
metronome: {
    textAlign: 'center',
    margin: 'auto',
    padding: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#690a38"
},
slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginBottom: 60,
},
text: {
    fontSize: 20,
    fontWeight:"bold",
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    color:"#ffffff",
},
logo:{
  fontWeight:"bold",
  fontSize: 40,
  color:"#ffffff",
  marginBottom: 50,
  alignItems: 'center',
},
Button:{
  width:"85%",
  backgroundColor:"#ff7f17",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom:40
},
buttonText:{
  color:"#000000",
  fontWeight:"bold",
}
});

export default Metronome;