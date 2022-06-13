import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { randomImages } from '../utilities/Randomizer';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';


export default function Sextynine() {
  
  const [cardsData, setCardsData] = useState([
    { image: require('../assets/photos/test4.jpg'), id: 1 },
    { image: require('../assets/photos/test7.jpg'), id: 2 },
    { image: require('../assets/photos/test.jpg'), id: 3 },
    { image: require('../assets/photos/test2.jpg'), id: 4 },
    { image: require('../assets/photos/test3.jpg'), id: 5 },
    { image: require('../assets/photos/test5.jpg'), id: 6 },
    { image: require('../assets/photos/test6.jpg'), id: 7 },
  ]);

    const notificationSrc = require("../assets/audio/card.mp3")
    const notification = require("../assets/audio/audio2.mp3")
    const [currentSound, setSound] = useState();

    const playSound = React.useCallback(async() => {
      const { sound } = await Audio.Sound.createAsync(notificationSrc);
      setSound(sound);
      await sound.playAsync(); 
    }, []);

    useEffect(() => {
      return currentSound ? () => currentSound.unloadAsync() : undefined;
    }, [currentSound]);

    
    const playSound2 = React.useCallback(async() => {
      const { sound } = await Audio.Sound.createAsync(notification);
      setSound(sound);
      await sound.playAsync(); 
    }, []);

    useEffect(() => {
      return currentSound ? () => currentSound.unloadAsync() : undefined;
    }, [currentSound]);

  const onPressF = (image) => {
    setCardsData((prevImage) => {
      return prevImage.filter(img => img.image != image);
    })
  }

  const  hapticSuccess = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  }

  const  hapticError = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  }


  return (
    <View>
      <ImageBackground source={require('../assets/photos/backgroundcolors.jpg')} style={styles.image} />
        <View style={styles.cardImages}>
          <Image source={randomImages(cardsData).image} style={styles.cardsFromData} />
        </View>
      <View style={style.viewBtn}> 
          <TouchableOpacity onPress={() => {onPressF(setCardsData.image); hapticError(); playSound2()}} > 
              <Image source={require('../assets/photos/forbidden.png')} style={style.forbiddenBtn}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {onPressF(setCardsData.image); hapticSuccess(); playSound()}}>
              <Image source={require('../assets/photos/beer.png')} style={style.beerBtn}/>
          </TouchableOpacity>
      </View> 
    </View>
  )
}



const style = StyleSheet.create({
  viewBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 30
  },
  beerBtn: {
    height: 85,
    width: 85,
  },
  forbiddenBtn: {
    height: 85,
    width: 85,
  }
})



