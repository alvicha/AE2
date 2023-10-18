/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenidor}>
      <View style={styles.seccio1}>
        <Text>Secció 1</Text>
      </View>
      <View style={styles.seccio2}>
        <Text>Secció 2</Text>
      </View>
      <View style={styles.seccio3}>
        <Text>Secció 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1, //Lo que hace es que entre los tres divs me hacen en uno solo y que me queden cuadrados con exactitud
    flexDirection: 'column-reverse',
    borderColor: 'purple',
    borderWidth: 5,
  },
  seccio1: {
    flex: 0.15,
    borderColor: 'red',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  },
  seccio2: {
    flex: 0.7,
    borderColor: 'green',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',
  },
  seccio3: {
    flex: 0.15,
    borderColor: 'blue',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'left',
  },
});

export default App;