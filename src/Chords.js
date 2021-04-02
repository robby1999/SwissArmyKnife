import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native';
import SegmentedPicker, { PickerOptions, Selections, ANIMATION_TIME } from 'react-native-segmented-picker';
import { images } from '../img/ChordsDB.js';

interface Props {
    onConfirm: (selections: Selections) => void;
}

class Home extends React.Component<Props> {
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
        imgSource: images.A.src,
        selections: {},
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
    }
    else if (selections.note + selections.type == "BbMajor") {
        this.setState({ imgSource: require('../img/Major/Bb.png') });
    }
    else if (selections.note + selections.type == "BMajor") {
        this.setState({ imgSource: require('../img/Major/B.png') });
    }
    else if (selections.note + selections.type == "CMajor") {
        this.setState({ imgSource: require('../img/Major/C.png') });
    }
    else if (selections.note + selections.type == "DbMajor") {
        this.setState({ imgSource: require('../img/Major/Db.png') });
    }
    else if (selections.note + selections.type == "DMajor") {
        this.setState({ imgSource: require('../img/Major/D.png') });
    }
    else if (selections.note + selections.type == "EbMajor") {
        this.setState({ imgSource: require('../img/Major/Eb.png') });
    }
    else if (selections.note + selections.type == "EMajor") {
        this.setState({ imgSource: require('../img/Major/E.png') });
    }
    else if (selections.note + selections.type == "FMajor") {
        this.setState({ imgSource: require('../img/Major/F.png') });
    }
    else if (selections.note + selections.type == "GbMajor") {
        this.setState({ imgSource: require('../img/Major/Gb.png') });
    }
    else if (selections.note + selections.type == "GMajor") {
        this.setState({ imgSource: require('../img/Major/G.png') });
    }
    else if (selections.note + selections.type == "AbMajor") {
        this.setState({ imgSource: require('../img/Major/Ab.png') });
    }
    else if (selections.note + selections.type == "AMinor") {
        this.setState({ imgSource: require('../img/Minor/Am.png') });
    }
    else if (selections.note + selections.type == "BbMinor") {
        this.setState({ imgSource: require('../img/Minor/Bbm.png') });
    }
    else if (selections.note + selections.type == "BMinor") {
        this.setState({ imgSource: require('../img/Minor/Bm.png') });
    }
    else if (selections.note + selections.type == "CMinor") {
        this.setState({ imgSource: require('../img/Minor/Cm.png') });
    }
    else if (selections.note + selections.type == "DbMinor") {
        this.setState({ imgSource: require('../img/Minor/Dbm.png') });
    }
    else if (selections.note + selections.type == "DMinor") {
        this.setState({ imgSource: require('../img/Minor/Dm.png') });
    }
    else if (selections.note + selections.type == "EbMinor") {
        this.setState({ imgSource: require('../img/Minor/Ebm.png') });
    }
    else if (selections.note + selections.type == "EMinor") {
        this.setState({ imgSource: require('../img/Minor/Em.png') });
    }
    else if (selections.note + selections.type == "FMinor") {
        this.setState({ imgSource: require('../img/Minor/Fm.png') });
    }
    else if (selections.note + selections.type == "GbMinor") {
        this.setState({ imgSource: require('../img/Minor/Gbm.png') });
    }
    else if (selections.note + selections.type == "GMinor") {
        this.setState({ imgSource: require('../img/Minor/Gm.png') });
    }
    else if (selections.note + selections.type == "AbMinor") {
        this.setState({ imgSource: require('../img/Minor/Abm.png') });
    }

  }

render(){
  const { options, selections } = this.state;

  return (
      <View style={styles.container}>
        <Text style={styles.logo}>Chords</Text>
        <Image
            style={{ width: 300, height: 300, backgroundColor: "white" }}
            source={this.state.imgSource}/>
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
}
});

export default Home;