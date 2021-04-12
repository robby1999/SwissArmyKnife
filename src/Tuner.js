import React, { Component } from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, AppRegistry } from 'react-native';

class Tuner extends Component {

    constructor(props) {
        super(props);
        this.audioPlayer = new Audio.Sound();
        this.state = {
            note: " ",
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

    lowEToggle = async () => {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/lowE.wav'));
            await this.audioPlayer.playAsync();
            //this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
            console.log("Error loading sound");
        }
    }

    aToggle = async () => {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/A.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
            console.log("Error loading sound");
        }
    }

    dToggle = async () => {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/D.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
            console.log("Error loading sound");
        }
    }

    gToggle = async () => {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/G.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
            console.log("Error loading sound");
        }
    }

    bToggle = async () => {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/B.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
            console.log("Error loading sound");
        }
    }

    highEToggle = async () => {
        try {
            this.audioPlayer.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;
                this.audioPlayer.unloadAsync();
            });
            this.audioPlayer.unloadAsync();
            await this.audioPlayer.loadAsync(require('../sounds/highE.wav'));
            await this.audioPlayer.playAsync();
            this.audioPlayer.setPositionAsync(0);
        } catch (error) {
            // Error occurred
            console.log("Error loading sound");
        }
    }

    goHome = async () => {
        this.audioPlayer.unloadAsync();
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Tuner</Text>
                <TouchableOpacity onPress={this.lowEToggle}
                    style={styles.LowEButton}>
                    <Text style={styles.buttonText}>Low E</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.aToggle}
                    style={styles.AButton}>
                    <Text style={styles.buttonText}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.dToggle}
                    style={styles.DButton}>
                    <Text style={styles.buttonText2}>D</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.gToggle}
                    style={styles.GButton}>
                    <Text style={styles.buttonText}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.bToggle}
                    style={styles.BButton}>
                    <Text style={styles.buttonText}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.highEToggle}
                    style={styles.HighEButton}>
                    <Text style={styles.buttonText2}>High E</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.goHome}
                    style={styles.Button}>
                    <Text style={styles.homeButtonText}>Home</Text>
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
  color:"#ffffff",
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
  fontSize: 16,
},
buttonText2:{
  color:"#ffffff",
  fontWeight:"bold",
  fontSize: 16,
},
homeButtonText:{
  color:"#000000",
  fontWeight:"bold",
}
});

export default Tuner;