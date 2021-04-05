import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

class Home extends React.Component {

render(){
  return (
      <View style={styles.container}>
        <Text style={styles.logo}>Guitar Swiss Army knife</Text>
        <TouchableOpacity  onPress={ () => this.props.navigation.navigate('Tuner')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Tuner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Metronome')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Metronome</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ ()=> this.props.navigation.navigate('Chords')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Chords</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ () => this.props.navigation.navigate('Scales')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Scales</Text>
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
  backgroundColor: '#690a38',
  alignItems: 'center',
  justifyContent: 'center',
},
logo:{
  fontWeight:"bold",
  fontSize: 40,
  color:"#000000",
  marginBottom: 40,
  alignItems: 'center',
  textAlign: 'center',
},
Button:{
  width:"85%",
  backgroundColor:"#ff7f17",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10
},
buttonText:{
  color:"white",
  fontWeight:"bold",
}
});

export default Home;