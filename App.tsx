/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Button, TextInput } from 'react-native-paper';
import CalculadoraIMG from './components/CalculadoraIMG';

const App = () => {
  return (
    <View style={styles.contenidor}>
      <CalculadoraIMG />
    </View>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1, //Lo que hace es que entre los tres divs me hacen en uno solo y que me queden cuadrados con exactitud
    flexDirection: 'column',
  }
});

export default App;