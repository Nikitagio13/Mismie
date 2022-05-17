import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { randomImages } from '../utilities/Randomizer';


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

  const onPressF = (image) => {
    setCardsData((prevImage) => {
      
      return prevImage.filter(img => img.image != image);
    })
    
  }

  return (
    <View>
      <ImageBackground source={require('../assets/photos/backgroundcolors.jpg')} style={styles.image} />
      <TouchableWithoutFeedback onPress={() => onPressF(cardsData.image)}>
        <View style={styles.cardImages}>

          <Image source={randomImages(cardsData).image} style={styles.cardsFromData} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

// export default function Sextynine() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * CardsData.length))
//   const changeImage = () => {
//     const randomNumber = 
//     setCurrentImageIndex(randomNumber);
//   }
//   useEffect(() => changeImage(), [])

//   return (
//     <Image
//         source={CardsData[currentImageIndex]}
//         style={styles.imageStyle}
//     />
//   )
// }

const styles = StyleSheet.create({


  cardImages: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: .5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 12,
    marginTop: 80,
  },

  card: {
    width: '85%',
    height: '93%',
    borderRadius: 15,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    height: 1000,
  },

  cardsFromData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "85%",
    height: "96%",
   borderRadius: 10,
  }


}
)


