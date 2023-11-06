/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const CalculadoraIMG = (props) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [resultatIMC, setResultatIMC] = useState(0);
    const [color, setColor] = useState('');
    const [missatgeResultat, setMissatgeResultat] = useState('');

    const calculaIMC = () => {
        if (weight !== "" && height !== "") {
            let calculatedIMC = parseFloat(weight) / Math.pow(parseFloat(height), 2);
            setResultatIMC(calculatedIMC);
            if (calculatedIMC < 18.5) {
                setMissatgeResultat('Peso insuficiente');
                setColor('green');
            } else if (calculatedIMC <= 24.9) {
                setMissatgeResultat('Normopeso');
                setColor('green');
            } else if (calculatedIMC >= 25 && calculatedIMC <= 26.9) {
                setMissatgeResultat('Sobrepeso grado I');
                setColor('orange');
            } else if (calculatedIMC >= 27 && calculatedIMC <= 29.9) {
                setMissatgeResultat('Sobrepeso grado II (preobesidad)');
                setColor('orange');
            } else if (calculatedIMC >= 30 && calculatedIMC <= 34.9) {
                setMissatgeResultat('Obesidad de tipo I');
                setColor('orange');
            } else if (calculatedIMC >= 35 && calculatedIMC <= 39.9) {
                setMissatgeResultat('Obesidad de tipo II');
                setColor('orange');
            } else if (calculatedIMC >= 40 && calculatedIMC <= 49.9) {
                setMissatgeResultat('Obesidad de tipo III (mórbida)');
                setColor('red');
            } else {
                setMissatgeResultat('Obesidad de tipo IV (extrema)');
                setColor('red');
            }
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
                            style={styles.resultat}
                            onChangeText={setWeight}
                            value={weight}
                            placeholder="Peso"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={styles.seccioAltura}>
                    <View style={styles.altura}>
                        <Text style={styles.titleAltura}>Altura:</Text>
                    </View>
                    <View style={styles.textInputAltura}>
                        <TextInput
                            onChangeText={setHeight}
                            style={styles.resultat}
                            value={height}
                            placeholder="Altura"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={styles.seccioBoto}>
                    <Button mode="contained" onPress={calculaIMC} style={styles.button}>
                        CALCULAR!
                    </Button>
                </View>
            </View>
            <View style={styles.seccio3}>
                <View style={styles.resultatIMC}>
                    <Text style={styles.IMC}>{resultatIMC}</Text>
                    <Text style={{ fontSize: 25, color: color }}>{missatgeResultat}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenidor: {
        flex: 1,
        flexDirection: 'column',
        borderColor: 'purple',
        borderWidth: 5,
    },
    resultat: {
    },
    seccioAltura: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    resultatIMC: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    IMC: {
        fontSize: 25,
    }
});

export default CalculadoraIMG;