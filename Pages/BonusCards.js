import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import ImgData from '../Components/carousel';


export default function BonusCards() {
  return (
    <View style={styles.gamesview}>
        <ImgData />
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
            width: "100%",
            
        }
    }
)



