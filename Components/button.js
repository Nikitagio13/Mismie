import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function FlatButton({text, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:"#5325",
        paddingVertical: 11,
        paddingHorizontal: 30,
        width: 259,
        alignItems: 'center',
        position: 'relative',
        top: 15,
        marginTop: 16,
        borderRadius:30,
    },
    buttonText: {
        color:"#FFC300",
        fontSize: 24,
        fontFamily: 'alk_life',
    }
 
})