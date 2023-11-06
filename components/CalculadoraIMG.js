/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CalculadoraIMG = (props) => {
    const [color, setColor] = useState('');
    let missatgeResultat = '';
    if (props.valorIMC < 18.5) {
        missatgeResultat = 'Peso insuficiente';
        setColor('green');
    } else if (props.valorIMC >= 18.5 && props.valorIMC <= 24.9) {
        missatgeResultat = 'Normopeso';
        setColor('green');
    } else if (props.valorIMC >= 25 && props.valorIMC <= 26.9) {
        missatgeResultat = 'Sobrepeso grado I';
        setColor('orange');
    } else if (props.valorIMC >= 27 && props.valorIMC <= 29.9) {
        missatgeResultat = 'Sobrepeso grado II (preobesidad)';
        setColor('orange');
    } else if (props.valorIMC >= 30 && props.valorIMC <= 34.9) {
        missatgeResultat = 'Obesidad de tipo I';
        setColor('orange');
    } else if (props.valorIMC >= 35 && props.valorIMC <= 39.9) {
        missatgeResultat = 'Obesidad de tipo II';
        setColor('orange');
    } else if (props.valorIMC >= 40 && props.valorIMC <= 49.9) {
        missatgeResultat = 'Obesidad de tipo III (mórbida)';
        setColor('red');
    } else {
        missatgeResultat = 'Obesidad de tipo IV (extrema)';
        setColor('red');
    }

    return (
        <View style={styles.missatge}>
            <Text style={{ color: color }}>{missatgeResultat}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    missatge: {
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

export default CalculadoraIMG;