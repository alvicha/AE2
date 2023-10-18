/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


const nom = (textAMostrar) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{textAMostrar}</Text>
    </View>
  );
}

function getPlaceholderTextColor(estil) {
  return estil === "florida" ? "white" : "orange";
}

function getStyle(estil) {
  return estil === 'florida' ? styles.florida : styles.upv;
}

const dades = (arr) => {
  const estil = 'upv';
  const isAdmin = true;

  const moduls2Dam = [
    { nom: 'DIN', professor: 'Manel', hores: 120 },
    { nom: 'ADA', professor: 'Roberto', hores: 120 },
    { nom: 'PMDM', professor: 'Paco', hores: 100 },
    { nom: 'PSP', professor: 'Roberto', hores: 60 },
    { nom: 'SGE', professor: 'Belén', hores: 100 },
    { nom: 'Anglés', professor: 'Caterina', hores: 40 },
    { nom: 'EIE', professor: 'Ana', hores: 60 },
  ];

  return (
    <View style={getStyle(estil)}>
      {
        arr.map((component, index) => {
          return (
            <TextInput
              key={index}
              label="Introdueix les teues dates"
              placeholder={component}
              placeholderTextColor={getPlaceholderTextColor(estil)}
              mode='flat'
              left={<TextInput.Icon icon="eye" />}
            />
          );
        })
      }
      {isAdmin && <Button buttonColor="#9214FA" textColor="white" icon="format-list-bulleted" mode="contained" onPress={() => console.log('Pressed')}>
        INFORMES
      </Button>}

      <SafeAreaView>
        {
          moduls2Dam.map((modul, index) => {
            return (
              <View key={index} style={{ width: 550, justifyContent: 'center', backgroundColor: index % 2 === 0 ? '#F48FB1' : '#F8BBD0' }}>
                <Text>
                  {index + 1}
                </Text>
                <Text>
                  {modul.nom}
                </Text>
                <Text>
                  {modul.professor}
                </Text>
                <Text>
                  {modul.hores}
                </Text>
              </View>
            );
          })
        }
      </SafeAreaView>
    </View>
  )
};

/*
const dades = (arr) => {
  const estil = 'upv';
  return (
    <View style={getStyle(estil)}>
      {
        arr.map((component, index) => {
          return (
            <TextInput
              key={index}
              label={component}
              placeholder={component}
              placeholderTextColor={getPlaceholderTextColor(estil)}
              mode='flat'
            />
          );
        })
      }
    </View>
  )
};
*/
// El simbolo && (AND) se usa para cuando este true se ponga un mensaje sino si es false se hará otra función.
const App = () => {
  let array = ['Email', 'Nom'];
  return (
    <PaperProvider>
      {nom("Alberto Villegas Chaparro")}
      <SafeAreaView>
        {dades(array)}
      </SafeAreaView>
    </PaperProvider>

  );
}


//{esticLoguejat && Saluda("Benvingut alumne de 2DAM", "Alberto")}
/*
const Saluda = (text, nom) => {
  return (
    <View>
      <Text style={estils.sectionTitle}>{text} </Text>
      <Text style={estils.sectionTitle}>Posicio {nom} </Text>
    </View>
  );
}
return (
  <PaperProvider>
    <StatusBar />
    {alumnesNom.map((unAlumne, index) => {
      return Saluda("Benvingut alumne de 2DAM", index + ": " + unAlumne);
    })}
  </PaperProvider>
);
*/
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    width: 390,
    height: 70,
    margin: 12,
    borderWidth: 1,
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
