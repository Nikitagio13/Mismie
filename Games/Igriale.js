import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { randomImages, randomTexts } from '../utilities/Randomizer';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';


export default function  Igriale() {

  const [cardsData, setCardsData] = useState([
    { image: require('../assets/photos/bck-igriale.png')},
  ]);

  const texts = [
    {text: `ყველამ ჩამოთვალოს ის მოფერებითი მეტსახელები, რასაც შეყვარებულები გეძახდნენ ან თავად ეძახდით. ${'\n'}${'\n'} ყველაზე სასაცილო მეტსახელის ავტორი ირჩევს ვინ და რამდენჯერ დალიოს`},
    {text: `წაშალე მეგობრებიდან რომელიმე FACEBOOK FRIEND და თან მიწერე: ${'\n'}"BYE BITCH!🖕" ${'\n'}${'\n'} უარის შემთხვევაში სვამ ორჯერ.`},
    {text: `აირჩიეთ მოთამაშე, რომელიც ცხოვრობს შეყვარებულთან ერთად ან ჰყავს მეუღლე და ის თან არ ახლავს. გოგოებმა აკოცეთ ისე, რომ ტანსაცმელზე დაატყოთ ტუჩსაცხები. ${'\n'}${'\n'} უარის შემთხვევაში სვამს სამჯერ.`}
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
      <ImageBackground source={require('../assets/photos/backgroundcolorsgreen.jpg')} style={styles.image} />
        <View style={styles.cardImages}>
            <Image source={randomImages(cardsData).image} style={styles.cardsFromData} />
            <Text style={styles.textForIgriale}>{randomTexts(texts).text}</Text>
        </View>
            
      
        <View style={styles.viewBtn}> 
          <TouchableOpacity onPress={() => {onPressF(setCardsData.image); hapticError(); }} > 
              <Image source={require('../assets/photos/forbidden.png')} style={styles.forbiddenBtn}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {onPressF(setCardsData.image); hapticSuccess(); }}>
              <Image source={require('../assets/photos/beer.png')} style={styles.beerBtn}/>
          </TouchableOpacity>
      </View> 
    </View>
  )
}



