import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Metronome from './src/Metronome';
import Tuner from './src/Tuner';
import Chords from './src/Chords';
import Scales from './src/Scales';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Metronome"
            component={Metronome}
          />
          <Stack.Screen
            name="Tuner"
            component={Tuner}
          />
          <Stack.Screen
            name="Chords"
            component={Chords}
          />
          <Stack.Screen
            name="Scales"
            component={Scales}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


