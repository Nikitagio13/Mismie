import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { randomImages, randomTexts } from '../utilities/Randomizer';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';


export default function Damisxi() {

  const [cardsData, setCardsData] = useState([
    { image: require('../assets/photos/bck-damisxi2.png') },
  ]);


  const texts = [
    {text: `ყველამ ააგდეთ თითო SNACK და პირით დაიჭირეთ ჰაერში.${'\n'}${'\n'} ვისაც არ გამოუვა, სვამს.`},
    {text: `რომელიმე ბიჭს შეუტყუპეთ ძუძუები და ფოტო ახლოდან ისე გადაუღეთ, რომ ჩანდეს მხოლოდ დეკოლტე. გაუგზავნეთ ეს ფოტო მის რომელიმე FACEBOOK FRIEND-ს და დაელოდეთ რეაქციას.${'\n'}${'\n'} უარის შემთხვევაში სვამს სამჯერ.`},
    {text: `ტირიონ ლანისტერი${'\n'}${'\n'} შემოუარე მაგიდას მუხლებით და ასე დალიე ორჯერ.`},
    {text: `დაურეკე ვინმეს და სრული სერიოზულობით მიულოცე პოლიკარპე მართალის ხსენების დღე. თუ დაიჯერებს და ისიც მოგილოცავთ, აირიდეთ დალევა.${'\n'}${'\n'} თუ მიგიხვდება, დალიე ორჯერ.`}
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
      <ImageBackground source={require('../assets/photos/backgroundcolorsblue.jpg')} style={styles.image} />
      
        <View style={styles.cardImages}>
          <Image source={randomImages(cardsData).image} style={styles.cardsFromData} />
          <Text style={styles.textForDamisxiz}>{randomTexts(texts).text}</Text>
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




