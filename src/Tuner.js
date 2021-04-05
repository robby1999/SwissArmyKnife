import React, { Component } from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, AppRegistry } from 'react-native';

class Tuner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: " ",
        };

    }

    lowEToggle= () => {
        this.setState({ note: 1 });
    }

    aToggle= () => {
        this.setState({ note: 2 });
    }

    dToggle= () => {
        this.setState({ note: 3 });
    }

    gToggle= () => {
        this.setState({ note: 4 });
    }

    bToggle= () => {
        this.setState({ note: 5 });
    }

    highEToggle= () => {
        this.setState({ note: 6 });
    }

    async componentDidMount() {
        Audio.setAudioModeAsync({
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            shouldDuckAndroid: false,
            staysActiveInBackground: false,
            playsThroughEarpieceAndroid: true
        });
    }

    playSound = async () => {
      const sound = new Audio.Sound();
      // Determine what sound to play
      switch(this.state.note) {
        case 1 :
            try {
                await sound.loadAsync(require('../sounds/lowE.wav'));
                await sound.playAsync();
                this.sound.setPositionAsync(0);
                await sound.unloadAsync();
            } catch (error) {
                // Error occurred
            }
        case 2 :
            try {
                await sound.loadAsync(require('../sounds/A.wav'));
                await sound.playAsync();
                this.sound.setPositionAsync(0);
                await sound.unloadAsync();
            } catch (error) {
                // Error occurred
            }
        case 3 :
            try {
                await sound.loadAsync(require('../sounds/D.wav'));
                await sound.playAsync();
                this.sound.setPositionAsync(0);
                await sound.unloadAsync();
            } catch (error) {
                // Error occurred
            }
        case 4 :
            try {
                await sound.loadAsync(require('../sounds/G.wav'));
                await sound.playAsync();
                this.sound.setPositionAsync(0);
                await sound.unloadAsync();
            } catch (error) {
                // Error occurred
            }
        case 5 :
            try {
                await sound.loadAsync(require('../sounds/B.wav'));
                await sound.playAsync();
                this.sound.setPositionAsync(0);
                await sound.unloadAsync();
            } catch (error) {
                // Error occurred
            }
        case 6 :
            try {
                await sound.loadAsync(require('../sounds/highE.wav'));
                await sound.playAsync();
                this.sound.setPositionAsync(0);
                await sound.unloadAsync();
            } catch (error) {
                // Error occurred
            }
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Tuner</Text>
                <TouchableOpacity onPressIn={this.lowEToggle}
                    onPress={this.playSound}
                    style={styles.LowEButton}>
                    <Text style={styles.buttonText}>Low E</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={this.aToggle}
                    onPress={this.playSound}
                    style={styles.AButton}>
                    <Text style={styles.buttonText}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={this.dToggle}
                    onPress={this.playSound}
                    style={styles.DButton}>
                    <Text style={styles.buttonText}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={this.gToggle}
                    onPress={this.playSound}
                    style={styles.GButton}>
                    <Text style={styles.buttonText}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={this.bToggle}
                    onPress={this.playSound}
                    style={styles.BButton}>
                    <Text style={styles.buttonText}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity onPressIn={this.highEToggle}
                    onPress={this.playSound}
                    style={styles.HighEButton}>
                    <Text style={styles.buttonText}>High E</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={ () => this.props.navigation.goBack()}
                    style={styles.Button}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
  textAlign: 'center',
  margin: 'auto',
  padding: 30,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "#690a38"
},
logo:{
  fontWeight:"bold",
  fontSize: 40,
  color:"#000000",
  alignItems: 'center',
  paddingTop: 50,
  marginBottom: 50
},
Button:{
  width:"85%",
  backgroundColor:"#ff7f17",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop: 60
},
LowEButton:{
  width:"85%",
  backgroundColor:"#b5a642",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom: 10
},
AButton:{
  width:"85%",
  backgroundColor:"#ff0800",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom: 10
},
DButton:{
  width:"85%",
  backgroundColor:"#727472",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom: 10
},
GButton:{
  width:"85%",
  backgroundColor:"#93E9BE",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom: 10
},
BButton:{
  width:"85%",
  backgroundColor:"#f2c700",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginBottom: 10
},
HighEButton:{
  width:"85%",
  backgroundColor:"#2d5499",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
},
buttonText:{
  color:"#000000",
  fontWeight:"bold",
},
backButtonText:{
  color:"white",
  fontWeight:"bold",
}
});

export default Tuner;