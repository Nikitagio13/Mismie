import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { randomImages, randomTexts } from '../utilities/Randomizer';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';


export default function Sextynine() {
  
  const [cardsData, setCardsData] = useState([
    { image: require('../assets/photos/bck-sextynine.png') },

  ]);


    const texts = [
      {text: `ერთ ხელში დაიჭირეთ სასმისი, რომლითაც დალევთ. მეორე ხელით ერთმანეთს შეეხეთ რომელიმე ინტიმურ ადგილზე.${'\n'}${'\n'} თუ რომელიმე თქვენგანი უარს იტყვის, სვამთ სამჯერ.`},
      {text: `ინტიმურად აკოცეთ ერთმანეთს ყურის მიდამოებში.${'\n'}${'\n'} ვინც უფრო მალე დანებდება სვამს სამჯერ.`},
      {text: `დაამყარეთ პირადი რეკორდი. აკოცეთ ერთმანეთს ტუჩებში იმდენ ხანს, რამდენ ხანსაც ჯერ არასდროს გიკოცნიათ.${'\n'}${'\n'} ვინც უარს იტყვის, სვამს ოთხჯერ.`}
    ]


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
      <ImageBackground source={require('../assets/photos/backgroundcolorspurple.jpg')} style={styles.image} />
        <View style={styles.cardImagesSxt}>
          <Image source={randomImages(cardsData).image} style={styles.cardsFromData} />
          <Text style={styles.textForSextynine}>{randomTexts(texts).text}</Text>
        </View>
      <View style={styles.viewBtn}> 
          <TouchableOpacity onPress={() => {onPressF(setCardsData.image); hapticError();}} > 
              <Image source={require('../assets/photos/forbidden.png')} style={styles.forbiddenBtn}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {onPressF(setCardsData.image); hapticSuccess();}}> 
              <Image source={require('../assets/photos/beer.png')} style={styles.beerBtn}/>
          </TouchableOpacity>
      </View> 
    </View>
  )
}







