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
//import { Section } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [chipActivat, setChipActivat] = useState(false);
  const donarChipActivat = () => setChipActivat(!chipActivat);


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
        <Button buttonColor="#9214FA" textColor="white" icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={{ borderRadius: 10 }}>
          Alien
        </Button>
        <Button buttonColor="#9214FA" textColor="black" icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={{ borderRadius: 10 }}>
          ALIEN
        </Button>
        <Button buttonColor="black" textColor="#9214FA" icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={{ borderRadius: 0 }}>
          ALIEN
        </Button>
        <Button buttonColor="black" textColor="#9214FA" icon="alien" mode="contained" onPress={() => console.log('Pressed')} style={{ borderRadius: 0 }}>
          ALIEN
        </Button>
        <Text style={estils.text}>Switch Necessites un descans?</Text>
        <Switch
          color="red"
          onValueChange={onToggleSwitch}
          value={isSwitchOn}
        />
        <Text style={estils.text}>Botó dins un d`component
          Surface?</Text>
        <Surface style={estils.surface}>
          <Button
            icon="alien"
            onPress={() => console.log('Pressed')}
            style={estils.buttonSurface}
            labelStyle={{ color: '#9214FA' }}>
            ALIEN
          </Button>
        </Surface>
        <Text style={estils.text}>Provant Chips</Text>
        <View style={{ flexDirection: 'row' }}>
          <Chip icon="web" onPress={() => console.log('Pressed')} style={estils.web} >
            Internet
          </Chip>
          <Chip icon="wifi" onPress={donarChipActivat} textStyle={{ color: chipActivat ? 'red' : 'gray' }} style={estils.wifi}>
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
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 53,
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
  buttonSurface: {
    backgroundColor: 'white'
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
  web: {
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 16,
    margin: 4,
    width: 100,
  },
  wifi: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
    margin: 4,
    width: 80,
  },
});

export default App;
