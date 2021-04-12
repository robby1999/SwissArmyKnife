import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import SegmentedPicker from 'react-native-segmented-picker';

class Chords extends React.Component {
  segmentedPicker: React.RefObject<SegmentedPicker> = React.createRef();
  constructor(props) {
    super(props);
    this.segmentedPicker = React.createRef();
    this.state = {
        options: [
            {
                key: 'note',
                items: [
                    { label: 'A', value: 'A' },
                    { label: 'A#/Bb', value: 'Bb' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                    { label: 'C#/Db', value: 'Db' },
                    { label: 'D', value: 'D' },
                    { label: 'D#/Eb', value: 'Eb' },
                    { label: 'E', value: 'E' },
                    { label: 'F', value: 'F' },
                    { label: 'F#/Gb', value: 'Gb' },
                    { label: 'G', value: 'G' },
                    { label: 'G#/Ab', value: 'Ab' },
                ],
            },
            {
                key: 'type',
                items: [
                    { label: 'Major', value: 'Major' },
                    { label: 'Minor', value: 'Minor' },
                ],
            },
        ],
        imgSource: require('../img/Major/A.png'),
        selections: {},
        name: "A Major"
    };
  }

  showPicker = () => {
    this.segmentedPicker.current.show();
  }

  onConfirm = (selections: Selections) => {
    this.setState({ selections })
    console.info(selections.note + selections.type);
    if (selections.note + selections.type == "AMajor") {
        this.setState({ imgSource: require('../img/Major/A.png') });
        this.setState({ name: "A Major" });
    }
    else if (selections.note + selections.type == "BbMajor") {
        this.setState({ imgSource: require('../img/Major/Bb.png') });
        this.setState({ name: "A#/Bb Major" });
    }
    else if (selections.note + selections.type == "BMajor") {
        this.setState({ imgSource: require('../img/Major/B.png') });
        this.setState({ name: "B Major" });
    }
    else if (selections.note + selections.type == "CMajor") {
        this.setState({ imgSource: require('../img/Major/C.png') });
        this.setState({ name: "C Major" });
    }
    else if (selections.note + selections.type == "DbMajor") {
        this.setState({ imgSource: require('../img/Major/Db.png') });
        this.setState({ name: "C#/Db Major" });
    }
    else if (selections.note + selections.type == "DMajor") {
        this.setState({ imgSource: require('../img/Major/D.png') });
        this.setState({ name: "D Major" });
    }
    else if (selections.note + selections.type == "EbMajor") {
        this.setState({ imgSource: require('../img/Major/Eb.png') });
        this.setState({ name: "D#/Eb Major" });
    }
    else if (selections.note + selections.type == "EMajor") {
        this.setState({ imgSource: require('../img/Major/E.png') });
        this.setState({ name: "E Major" });
    }
    else if (selections.note + selections.type == "FMajor") {
        this.setState({ imgSource: require('../img/Major/F.png') });
        this.setState({ name: "F Major" });
    }
    else if (selections.note + selections.type == "GbMajor") {
        this.setState({ imgSource: require('../img/Major/Gb.png') });
        this.setState({ name: "F#/Gb Major" });
    }
    else if (selections.note + selections.type == "GMajor") {
        this.setState({ imgSource: require('../img/Major/G.png') });
        this.setState({ name: "G Major" });
    }
    else if (selections.note + selections.type == "AbMajor") {
        this.setState({ imgSource: require('../img/Major/Ab.png') });
        this.setState({ name: "G#/Ab Major" });
    }
    else if (selections.note + selections.type == "AMinor") {
        this.setState({ imgSource: require('../img/Minor/Am.png') });
        this.setState({ name: "A Minor" });
    }
    else if (selections.note + selections.type == "BbMinor") {
        this.setState({ imgSource: require('../img/Minor/Bbm.png') });
        this.setState({ name: "A#/Bb Minor" });
    }
    else if (selections.note + selections.type == "BMinor") {
        this.setState({ imgSource: require('../img/Minor/Bm.png') });
        this.setState({ name: "B Minor" });
    }
    else if (selections.note + selections.type == "CMinor") {
        this.setState({ imgSource: require('../img/Minor/Cm.png') });
        this.setState({ name: "C Minor" });
    }
    else if (selections.note + selections.type == "DbMinor") {
        this.setState({ imgSource: require('../img/Minor/Dbm.png') });
        this.setState({ name: "C#/Db Minor" });
    }
    else if (selections.note + selections.type == "DMinor") {
        this.setState({ imgSource: require('../img/Minor/Dm.png') });
        this.setState({ name: "D Minor" });
    }
    else if (selections.note + selections.type == "EbMinor") {
        this.setState({ imgSource: require('../img/Minor/Ebm.png') });
        this.setState({ name: "D#/Eb Minor" });
    }
    else if (selections.note + selections.type == "EMinor") {
        this.setState({ imgSource: require('../img/Minor/Em.png') });
        this.setState({ name: "E Minor" });
    }
    else if (selections.note + selections.type == "FMinor") {
        this.setState({ imgSource: require('../img/Minor/Fm.png') });
        this.setState({ name: "F Minor" });
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
        <Text style={styles.logo}>Chords</Text>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={this.state.imgSource} />
        <TouchableOpacity  onPress={this.showPicker}
          style={styles.Button}>
          <Text style={styles.buttonText}>Chord Selector</Text>
        </TouchableOpacity>
        <SegmentedPicker
            ref={this.segmentedPicker}
            onConfirm={this.onConfirm}
            options={options}
            defaultSelections={selections}
        />
        <TouchableOpacity  onPress={ () => this.props.navigation.goBack()}
          style={styles.Button}>
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
  color:"#000000",
  fontWeight:"bold",
},
imageContainer:{
  height:300,
  width:310,
  backgroundColor:"white",
  justifyContent:"center",
},
image:{
  width:350,
  height:350,
  backgroundColor:"white",
}
});

export default Chords;