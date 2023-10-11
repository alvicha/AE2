/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import React from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';


import { Chip, Button, Surface, Switch } from 'react-native-paper';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
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
        <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={estils.button}>
          Alien
        </Button>
        <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={estils.button}>
          ALIEN
        </Button>
        <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={estils.button}>
          ALIEN
        </Button>
        <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={estils.button} >
          ALIEN
        </Button>
        <Text style={estils.text}>Switch Necessites un descans</Text>
        <Switch
          color="red"
          onValueChange={onToggleSwitch}
          value={isSwitchOn}
        />
        <Text style={estils.text}>Botó dins un d`component
          Surface?</Text>
        <Surface style={estils.surface} elevation={4}>
          <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={estils.button}>
            ALIEN
          </Button>
        </Surface>
        <Text style={estils.text}>Provant Chips</Text>
        <View style={{ flexDirection: 'row' }}>
          <Chip icon="web" onPress={() => console.log('Pressed')} style={estils.chip1}>
            Internet
          </Chip>
          <Chip icon="wifi" onPress={() => console.log('Pressed')} style={estils.chip2}>
            Wifi
          </Chip>
        </View>
      </SafeAreaView>
    </ScrollView >
  );
};

const estils = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: 270,
  },
  surface: {
    padding: 8,
    height: 80,
    width: 450,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    marginBottom: 10,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 27,
    color: 'white',
    marginTop: 40,
  },
  buttonAlien: {
    backgroundColor: 'blue',
    color: 'yellow'
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
    width: 120,
  },
  chipText: {
    color: 'gray',
  },
  chiptext2: {
    color: 'gray',
  },
  chip2: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
    margin: 4,
    width: 100,
  },
});

export default App;
