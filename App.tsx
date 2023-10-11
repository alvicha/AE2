/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
  Button,
  Switch
} from 'react-native';

//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importa el componente Icon

import { Chip } from 'react-native-paper';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <ScrollView style={estils.container}>
      <ImageBackground
        source={image}
        style={estils.backgroundImage}
      >
        <Text style={estils.sectionTitle}>Welcome to React Native</Text>
      </ImageBackground>
      <SafeAreaView style={estils.safeAreaView}>
        <Text style={estils.text}>TextInput (email)</Text>
        <TextInput
          editable
          multiline
          maxLength={40}
          style={estils.textInput}
          placeholder="Email"
        />
        <Text style={estils.text}>Button(amb text i icona)</Text>


        <Text style={estils.text}>Switch Necessites un descans</Text>
        <Switch
          onValueChange={onToggleSwitch}
          value={isSwitchOn}
        />
        <Text style={estils.text}>Botó dins un d`component
          Surface?</Text>
        <Button title="Press me" />
        <Text style={estils.text}>Provant Chips</Text>
        <Chip icon="internet" onPress={() => console.log('Pressed')} style={estils.chip1} textStyle={estils.chipText}>Internet</Chip>
        <Chip icon="Wifi" onPress={() => console.log('Pressed')} style={estils.chip2} textStyle={estils.chiptext2}>Wifi</Chip>
      </SafeAreaView>
    </ScrollView>
  );
};

const estils = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: 270,
  },
  sectionTitle: {
    fontSize: 55,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    width: 390,
    height: 70,
    margin: 12,
    borderWidth: 1,
  },
  text: {
    fontSize: 27,
    color: 'white',
    marginTop: 40,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black'
  },
  chip1: {
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 16,
    margin: 4,
    width: 140,
  },
  chipText: {
    color: 'gray',
  },
  chiptext2: {
    color: 'red',
  },
  chip2: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
    margin: 4,
    width: 140,
  },
});

export default App;
