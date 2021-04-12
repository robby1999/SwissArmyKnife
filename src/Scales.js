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
                    { label: 'Scale', value: 'scale' },
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
    else if (selections.type + selections.scale + selections.shape == "majorscale1") {
        this.setState({ imgSource: require('../img/MajorScale/Shape1.png') });
        this.setState({ name: "Major Scale Shape One" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorscale2") {
        this.setState({ imgSource: require('../img/MajorScale/Shape2.png') });
        this.setState({ name: "Major Scale Shape Two" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorscale3") {
        this.setState({ imgSource: require('../img/MajorScale/Shape3.png') });
        this.setState({ name: "Major Scale Shape Three" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorscale4") {
        this.setState({ imgSource: require('../img/MajorScale/Shape4.png') });
        this.setState({ name: "Major Scale Shape Four" });
    }
    else if (selections.type + selections.scale + selections.shape == "majorscale5") {
        this.setState({ imgSource: require('../img/MajorScale/Shape5.png') });
        this.setState({ name: "Major Scale Shape Five" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorscale1") {
        this.setState({ imgSource: require('../img/MinorScale/Shape1.png') });
        this.setState({ name: "Minor Scale Shape One" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorscale2") {
        this.setState({ imgSource: require('../img/MinorScale/Shape2.png') });
        this.setState({ name: "Minor Scale Shape Two" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorscale3") {
        this.setState({ imgSource: require('../img/MinorScale/Shape3.png') });
        this.setState({ name: "Minor Scale Shape Three" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorscale4") {
        this.setState({ imgSource: require('../img/MinorScale/Shape4.png') });
        this.setState({ name: "Minor Scale Shape Four" });
    }
    else if (selections.type + selections.scale + selections.shape == "minorscale5") {
        this.setState({ imgSource: require('../img/MinorScale/Shape5.png') });
        this.setState({ name: "Minor Scale Shape Five" });
    }

  }
render(){
  const { options, selections } = this.state;

  return (
      <View style={styles.container}>
        <Text style={styles.logo}>Scales</Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={this.state.imgSource} />
        <Text style={styles.text1}>
          Key:
        </Text>
        <Text style={styles.point1}>
          {'\u2B24'} Root Note
        </Text>
        <Text style={styles.point2}>
          {'\u2B24'} Blues Note
        </Text>
        <Text style={styles.text2}>
          *The numbers represent what fingers to use*
        </Text>
        <Text style={styles.text3}>
          The scales above are all in the key of A. The key of the scales can be changed by
          simply moving the root note to the note of the key you wish to play in.
        </Text>
        <TouchableOpacity  onPress={this.showPicker}
          style={styles.button}>
          <Text style={styles.buttonText}>Scale Selector</Text>
        </TouchableOpacity>
        <SegmentedPicker
            ref={this.segmentedPicker}
            onConfirm={this.onConfirm}
            options={options}
            defaultSelections={selections}
        />
        <TouchableOpacity  onPress={ () => this.props.navigation.goBack()}
          style={styles.backButton}>
          <Text style={styles.buttonText}>Home</Text>
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
  color:"#ffffff",
  marginBottom: 20,
  marginTop: 30,
  alignItems: 'center',
  textAlign: 'center',
},
button:{
  width:"85%",
  backgroundColor:"#ff7f17",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:20,
  marginBottom:30
},
backButton:{
  width:"85%",
  backgroundColor:"#ff7f17",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
},
buttonText:{
  color:"#000000",
  fontWeight:"bold",
},
image:{
  width:325,
  height:325,
  backgroundColor:"white",
},
text1: {
  fontSize: 20,
  fontWeight:"bold",
  textAlign: 'center',
  color:"#000000",
  backgroundColor:"white",
  width:325,
},
text2: {
  fontSize: 14,
  fontWeight:"bold",
  textAlign: 'center',
  color:"#000000",
  backgroundColor:"white",
  width:325,
},
text3: {
  fontSize: 14,
  textAlign: 'center',
  fontWeight: '500',
  color:"#000000",
  backgroundColor:"white",
  width:325,
},
point1: {
  fontSize: 20,
  fontWeight:"bold",
  textAlign: 'center',
  fontWeight: '500',
  color:"#D0021B",
  backgroundColor:"white",
  width:325,
},
point2: {
  fontSize: 20,
  fontWeight:"bold",
  textAlign: 'center',
  fontWeight: '500',
  color:"#4A90E2",
  backgroundColor:"white",
  width:325,
}
});

export default Scales;