import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


export default function KidevDamisxi() {
  return (
    <View style={styles.gamesview}>
        <Text style={styles.gamestext}>დამისხი დამალევინე</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        gamesview: {
            backgroundColor: 'purple',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        gamestext: {
            color: 'white',
            
            
        }
    }
)



