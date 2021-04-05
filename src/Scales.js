import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';
import SegmentedPicker from 'react-native-segmented-picker';

class Scales extends React.Component {
  segmentedPicker: React.RefObject<SegmentedPicker> = React.createRef();
  constructor(props) {
    super(props);
    this.segmentedPicker = React.createRef();
    this.state = {
        options: [
            {
                key: 'type',
                items: [
                    { label: 'Minor', value: 'minor' },
                    { label: 'Major', value: 'major' },
                ],
            },
            {
                key: 'scale',
                items: [
                    { label: 'Pentatonic', value: 'pentatonic' },
                    { label: 'Blues', value: 'blues' },
                ],
            },
            {
                key: 'shape',
                items: [
                    { label: 'Shape 1', value: '1' },
                    { label: 'Shape 2', value: '2' },
                    { label: 'Shape 3', value: '3' },
                    { label: 'Shape 4', value: '4' },
                    { label: 'Shape 5', value: '5' },
                    { label: 'Full Board', value: 'full' },
                ],
            },
        ],
        imgSource: require('../img/MinorPent/Shape1.png'),
        selections: {},
        name: "Minor Pentatonic Shape One"
    };
  }

  showPicker = () => {
    this.segmentedPicker.current.show();
  }

  onConfirm = (selections: Selections) => {
    this.setState({ selections })
    console.info(selections.type + selections.scale + selections.shape);
    if (selections.type + selections.scale + selections.shape == "minorpentatonic1") {
        this.setState({ imgSource: require('../img/MinorPent/Shape1.png') });
        this.setState({ name: "Minor Pentatonic Shape One" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorpentatonic2") {
        this.setState({ imgSource: require('../img/MinorPent/Shape2.png') });
        this.setState({ name: "Minor Pentatonic Shape Two" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorpentatonic3") {
        this.setState({ imgSource: require('../img/MinorPent/Shape3.png') });
        this.setState({ name: "Minor Pentatonic Shape Three" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorpentatonic4") {
        this.setState({ imgSource: require('../img/MinorPent/Shape4.png') });
        this.setState({ name: "Minor Pentatonic Shape Four" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorpentatonic5") {
        this.setState({ imgSource: require('../img/MinorPent/Shape5.png') });
        this.setState({ name: "Minor Pentatonic Shape Five" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorpentatonicfull") {
        this.setState({ imgSource: require('../img/MinorPent/FullScale.png') });
        this.setState({ name: "Minor Pentatonic Full Scale" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorpentatonic1") {
        this.setState({ imgSource: require('../img/MajorPent/Shape1.png') });
        this.setState({ name: "Major Pentatonic Shape 1" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorpentatonic2") {
        this.setState({ imgSource: require('../img/MajorPent/Shape2.png') });
        this.setState({ name: "Major Pentatonic Shape 2" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorpentatonic3") {
        this.setState({ imgSource: require('../img/MajorPent/Shape3.png') });
        this.setState({ name: "Major Pentatonic Shape 3" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorpentatonic4") {
        this.setState({ imgSource: require('../img/MajorPent/Shape4.png') });
        this.setState({ name: "Major Pentatonic Shape 4" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorpentatonic5") {
        this.setState({ imgSource: require('../img/MajorPent/Shape5.png') });
        this.setState({ name: "Major Pentatonic Shape 5" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorblues1") {
        this.setState({ imgSource: require('../img/MinorBlues/Shape1.png') });
        this.setState({ name: "Minor Blues Shape One" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorblues2") {
        this.setState({ imgSource: require('../img/MinorBlues/Shape2.png') });
        this.setState({ name: "Minor Blues Shape Two" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorblues3") {
        this.setState({ imgSource: require('../img/MinorBlues/Shape3.png') });
        this.setState({ name: "Minor Blues Shape Three" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorblues4") {
        this.setState({ imgSource: require('../img/MinorBlues/Shape4.png') });
        this.setState({ name: "Minor Blues Shape Four" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorblues5") {
        this.setState({ imgSource: require('../img/MinorBlues/Shape5.png') });
        this.setState({ name: "Minor Blues Shape Five" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorblues1") {
        this.setState({ imgSource: require('../img/MajorBlues/Shape1.png') });
        this.setState({ name: "Major Blues Shape One" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorblues2") {
        this.setState({ imgSource: require('../img/MajorBlues/Shape2.png') });
        this.setState({ name: "Major Blues Shape Two" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorblues3") {
        this.setState({ imgSource: require('../img/MajorBlues/Shape3.png') });
        this.setState({ name: "Major Blues Shape Three" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorblues4") {
        this.setState({ imgSource: require('../img/MajorBlues/Shape4.png') });
        this.setState({ name: "Major Blues Shape Four" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorblues5") {
        this.setState({ imgSource: require('../img/MajorBlues/Shape5.png') });
        this.setState({ name: "Major Blues Shape Five" });
    }
    else if (selections.note + selections.type == "GbMinor") {
        this.setState({ imgSource: require('../img/Minor/Gbm.png') });
        this.setState({ name: "F#/Gb Minor" });
    }
    else if (selections.note + selections.type == "GMinor") {
        this.setState({ imgSource: require('../img/Minor/Gm.png') });
        this.setState({ name: "G Minor" });
    }
    else if (selections.note + selections.type == "AbMinor") {
        this.setState({ imgSource: require('../img/Minor/Abm.png') });
        this.setState({ name: "G#/Ab Minor" });
    }

  }
render(){
  const { options, selections } = this.state;

  return (
      <View style={styles.container}>
        <Text style={styles.logo}>Scales</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.state.name}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={this.state.imgSource}/>
        </View>
        <TouchableOpacity  onPress={this.showPicker}
          style={styles.Button}>
          <Text style={styles.buttonText}>Scale Selector</Text>
        </TouchableOpacity>
        <SegmentedPicker
            ref={this.segmentedPicker}
            onConfirm={this.onConfirm}
            options={options}
            defaultSelections={selections}
        />
        <TouchableOpacity  onPress={ () => this.props.navigation.goBack()}
          style={styles.Button}>
          <Text style={styles.buttonText}>Back</Text>
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
},
textContainer:{
  backgroundColor:"white",
  width:350,
},
text:{
  fontSize: 20,
  fontWeight:"bold",
  textAlign: 'center',
  margin: 5,
  color:"#000000",
},
imageContainer:{
  height:310,
  width:350,
  backgroundColor:"white",
  justifyContent:"center",
},
image:{
  width:350,
  height:300,
  backgroundColor:"white",
}
});

export default Scales;