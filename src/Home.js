import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

class Home extends React.Component {

//    UserProfileFunction = () =>{
//        this.props.navigation.navigate('UserProfile', { ID: this.props.route.params.ID,
//                                                        name: this.props.route.params.name,
//                                                        email: this.props.route.params.email,
//                                                        contactNo: this.props.route.params.contactNo,
//                                                        DOB: this.props.route.params.DOB,
//                                                        gender: this.props.route.params.gender,
//                                                        address: this.props.route.params.address});
//      }

//    UpdateSymptomsFunction = () =>{
//        this.props.navigation.navigate('HealthInformation', { ID: this.props.route.params.ID,
//                                                           smoker: this.props.route.params.smoker,
//                                                           pregnant: this.props.route.params.pregnant,
//                                                           hospitalised: this.props.route.params.hospitalised,
//                                                           cardioProblem: this.props.route.params.cardioProblem,
//                                                           disability: this.props.route.params.disability,
//                                                           cancerTreatment: this.props.route.params.cancerTreatment,
//                                                           highRiskInfection: this.props.route.params.highRiskInfection,
//                                                           covidSymptoms: this.props.route.params.covidSymptoms});
//      }

render(){
  return (
      <View style={styles.container}>
        <Text style={styles.logo}>Guitar Swiss Army knife</Text>
        <TouchableOpacity  //onPress={this.UserProfileFunction}
          style={styles.Button}>
          <Text style={styles.buttonText}>Tuner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Metronome')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Metronome</Text>
        </TouchableOpacity>
        <TouchableOpacity  //onPress={ ()=> Linking.openURL('https://www.gov.uk/coronavirus')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Chords</Text>
        </TouchableOpacity>
        <TouchableOpacity  //onPress={ () => this.props.navigation.navigate('Login')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Scales</Text>
        </TouchableOpacity>
  </View>
        );
    }
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#00A9CE',
  alignItems: 'center',
  justifyContent: 'center',
},
logo:{
  fontWeight:"bold",
  fontSize: 40,
  color:"#fb5b5a",
  marginBottom: 40,
  marginLeft: 20,
  alignItems: 'center',
},
Button:{
  width:"80%",
  backgroundColor:"#fb5b5a",
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