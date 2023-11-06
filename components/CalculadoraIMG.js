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
} from 'react-native';

const CalculadoraIMG = (props) => {
    const missatgeDelPes = pesCalculat => {
        if (pesCalculat < 18.5) {
            return ('Peso insuficiente');
        } else if (pesCalculat >= 18.5 && pesCalculat <= 24.9) {
            return ('Normopeso');
        } else if (pesCalculat >= 25 && pesCalculat <= 26.9) {
            return ('Sobrepeso grado I');
        } else if (pesCalculat >= 27 && pesCalculat <= 29.9) {
            return ('Sobrepeso grado II (preobesidad)');
        } else if (pesCalculat >= 30 && pesCalculat <= 34.9) {
            return ('Obesidad de tipo I');
        } else if (pesCalculat >= 35 && pesCalculat <= 39.9) {
            return ('Obesidad de tipo IIals missatges ');
        } else if (pesCalculat >= 40 && pesCalculat <= 49.9) {
            return ('Obesidad de tipo III (mórbida)');
        } else {
            return ('Obesidad de tipo IV (extrema)');
        }
    }
    return (
        <View style={styles.missatge}>
            <CalculadoraIMG valorIMC={valorIMC} />
        </View>
    );
}

const styles = StyleSheet.create({
    IMC: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    missatge: {
        fontSize: 25,
    }
});

export default CalculadoraIMG;