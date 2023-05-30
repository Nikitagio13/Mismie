import React, { useState } from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { randomImages } from "../utilities/Randomizer";
import { styles } from "../Components/stylesForCards";
import * as Haptics from "expo-haptics";

export default function Dampluri() {
  const [cardsData, setCardsData] = useState([
    { image: require("../assets/photos/test4.jpg"), id: 1 },
    { image: require("../assets/photos/test7.jpg"), id: 2 },
    { image: require("../assets/photos/test.jpg"), id: 3 },
    { image: require("../assets/photos/test2.jpg"), id: 4 },
    { image: require("../assets/photos/test3.jpg"), id: 5 },
    { image: require("../assets/photos/test5.jpg"), id: 6 },
    { image: require("../assets/photos/test6.jpg"), id: 7 },
  ]);

  
  const onPressF = (image) => {
    setCardsData((prevImage) => {
      return prevImage.filter((img) => img.image != image);
    });
  };

  const hapticSuccess = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const hapticError = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  };

  return (
    <View>
      <ImageBackground
        source={require("../assets/photos/backgroundcolors.jpg")}
        style={styles.image}
      />

      <View style={styles.cardImages}>
        <Image
          source={randomImages(cardsData).image}
          style={styles.cardsFromData}
        />
      </View>

      <View style={styles.viewBtn}>
        <TouchableOpacity
          onPress={() => {
            onPressF(setCardsData.image);
            hapticError();
            playSound();
          }}
        >
          <Image
            source={require("../assets/photos/forbidden.png")}
            style={styles.forbiddenBtn}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onPressF(setCardsData.image);
            hapticSuccess();
            playSound2();
          }}
        >
          <Image
            source={require("../assets/photos/beer.png")}
            style={styles.beerBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
