import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Dampluri() {
  return (
    <View style={styles.gamesview}>
        <Text style={styles.gamestext}>დამპლური თამაშები (რათ უნდა ყვირილი, აქანე?!)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        gamesview: {
            backgroundColor: 'purple',
            flex: 1
        },
        gamestext: {
            color: 'red',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)



