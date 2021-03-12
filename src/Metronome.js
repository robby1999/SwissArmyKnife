import React, { Component } from 'react';
import Slider from "react-native-slider";
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking, AppRegistry } from 'react-native';

class Metronome extends Component {
    state = {
        value: 25
    }

    render() {

        return (
            <View style={styles.metronome}>
                <View style={styles.bpmSlider}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
        <Text>
          Value: {this.state.value}
        </Text>
                </View>
            </View>
        );
    }
 }

const styles = StyleSheet.create({
metronome: {
    textAlign: 'center',
    maxWidth: 375,
    margin: 'auto',
    padding: 30
},
logo:{
  fontWeight: 'bold',
  fontSize: 40,
  color: "#fb5b5a",
  marginBottom: 40,
  marginLeft: 20,
},
bpmSlider: {
    width: "100%",
    margin: 10
},
button: {
    backgroundColor: "#C94D46",
    padding: "10px",
    borderColor: "#832420",
    borderRadius: 2,
    width: "100px",
    color: "#fff",
    fontSize: 18
  }
});

export default Metronome;