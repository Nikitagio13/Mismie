import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { randomTexts } from "../utilities/Randomizer";
import { styles } from "../Components/stylesForCards";
import * as Haptics from "expo-haptics";

export default function Sextynine() {
  const [cardsData, setCardsData] = useState("");

  const texts = [
    {
      text: `1 ერთ ხელში დაიჭირეთ სასმისი, რომლითაც დალევთ. მეორე ხელით ერთმანეთს შეეხეთ რომელიმე ინტიმურ ადგილზე.${"\n"}${"\n"} თუ რომელიმე თქვენგანი უარს იტყვის, სვამთ სამჯერ.`,
    },
    {
      text: `2 ინტიმურად აკოცეთ ერთმანეთს ყურის მიდამოებში.${"\n"}${"\n"} ვინც უფრო მალე დანებდება სვამს სამჯერ.`,
    },
    {
      text: `3 დაამყარეთ პირადი რეკორდი. აკოცეთ ერთმანეთს ტუჩებში იმდენ ხანს, რამდენ ხანსაც ჯერ არასდროს გიკოცნიათ.${"\n"}${"\n"} ვინც უარს იტყვის, სვამს ოთხჯერ.`,
    },
  ];

  const nextText = () => {
    texts;
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
        source={require("../assets/photos/backgroundcolorspurple.jpg")}
        style={styles.image}
      />
      <View style={styles.cardImagesSxt}>
        <Image
          source={require("../assets/photos/bck-sextynine.png")}
          style={styles.cardsFromData}
        />
        <Text style={styles.textForSextynine}>{randomTexts(texts).text}</Text>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity
          onPress={() => {
            randomTexts(texts).text;
            hapticError();
          }}
        >
          <Image
            source={require("../assets/photos/forbidden.png")}
            style={styles.forbiddenBtn}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nextText();
            hapticSuccess();
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
