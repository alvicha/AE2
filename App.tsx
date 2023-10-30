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

const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [IMC, setIMC] = useState(0);
  
  const CalcularIMC = () => {
    if (!isNaN(weight) && !isNaN(height)) {
      const calculatedIMC = weight / Math.pow(height, 2);
      setIMC(calculatedIMC);
    } else {
      setIMC(0);
    }
  }

  return (
    <View style={styles.contenidor}>
      <View style={styles.seccio1}>
        <Text style={styles.sectionTitle}>CALCULADORA IMC</Text>
      </View>
      <View style={styles.seccio2}>
        <View style={styles.peso}>
          <View style={styles.seccioPeso}>
            <Text style={styles.titlePeso}>Peso:</Text>
          </View>
          <View style={styles.textInputPeso}>
            <TextInput
              editable
              multiline
              maxLength={40}
              style={styles.resultat}
              placeholder="Peso"
            />
          </View>
        </View>
        <View style={styles.seccioAltura}>
          <View style={styles.altura}>
            <Text style={styles.titleAltura}>Altura:</Text>
          </View>
          <View style={styles.textInputAltura}>
            <TextInput
              editable
              multiline
              maxLength={40}
              onChangeText={alt => setHeight(parseInt(alt))}
              style={styles.resultat}
              placeholder="Altura"
            />
          </View>
        </View>
        <View style={styles.seccioBoto}>
          <Button mode="contained" onPress={() => CalcularIMC} style={styles.button}>
            PULSAME!
          </Button>
        </View>
      </View>
      <View style={styles.seccio3}>
        <Text>RESULTAT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1, //Lo que hace es que entre los tres divs me hacen en uno solo y que me queden cuadrados con exactitud
    flexDirection: 'column',
    borderColor: 'purple',
    borderWidth: 5,
  },
  resultat: {
  },
  seccioAltura: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    alignContent: 'space-between',
    width: 350,
    marginTop: 15,
  },
  titleAltura: {
    fontSize: 20,
    fontWeight: '600',
    padding: 12,
    textAlign: 'left',
  },
  textInputPeso: {
    justifyContent: 'flex-start',
    marginLeft: 5,
    width: 120,
  },
  seccioBoto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    alignContent: 'space-between',
    width: 350,
    marginTop: 34,
  },
  titlePeso: {
    fontSize: 20,
    fontWeight: '600',
    padding: 12,
    textAlign: 'left',
  },
  textInputAltura: {
    justifyContent: 'flex-start',
    marginLeft: 5,
    width: 120,
  },
  seccioPeso: {
    flexDirection: 'row',
    width: 90,
    alignContent: 'space-around',
  },
  peso: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    alignContent: 'space-between',
    width: 350,
  },
  altura: {
  },
  seccio1: {
    flex: 0.15,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  },
  seccio2: {
    flex: 0.5,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    height: 50,
    textAlign: 'center',
  },
  seccio3: {
    flex: 0.15,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 35,
    color: 'blue',
    fontWeight: '600',
    padding: 12,
    textAlign: 'center',
  },
  button: {
    borderRadius: 0,
    color: 'white',
    width: 300,
    height: 40,
  }
});

export default App;