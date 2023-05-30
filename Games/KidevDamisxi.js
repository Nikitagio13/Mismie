import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { randomImages } from "../utilities/Randomizer";
import { styles } from "../Components/stylesForCards";
import * as Haptics from "expo-haptics";

export default function KidevDamisxi() {
  const [cardsData, setCardsData] = useState([
    { image: require("../assets/photos/test4.jpg") },
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
