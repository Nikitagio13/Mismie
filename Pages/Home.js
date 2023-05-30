import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { styles } from "../Components/stylesForCards";

export default function Home({ navigation }) {
  const pressHandlerGames = () => {
    navigation.navigate("Games");
  };

  const pressHandlerAbout = () => {
    navigation.navigate("About");
  };

  const pressHandlerBonusCards = () => {
    navigation.navigate("BonusCards");
  };

  const hapticL = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  return (
    <View style={styles.containerH}>
      <View style={styles.homePageImages}>
        <Image
          source={require("../assets/photos/wine-bottles.png")}
          style={styles.homePageImage1}
        />
        <Image
          source={require("../assets/photos/R18.png")}
          style={styles.homePageImage2}
        />
      </View>

      <>
        <Image
          source={require("../assets/photos/mismieLogo2.png")}
          style={{ width: 350, height: 350, position: "relative", bottom: 120 }}
        />
        <Text style={styles.subtitleH}>თრობის ახალი ეპოქა</Text>

        <View style={{ position: "relative", bottom: 160 }}>
          <TouchableOpacity
            style={styles.buttonH}
            onPress={() => {
              pressHandlerGames();
              hapticL();
            }}
          >
            <Text style={styles.buttonTextH}>თამაშები</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonH}
            onPress={() => {
              pressHandlerBonusCards();
              hapticL();
            }}
          >
            <Text style={styles.buttonTextH}>ბონუს კარტები</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonH}
            onPress={() => {
              pressHandlerAbout();
              hapticL();
            }}
          >
            <Text style={styles.buttonTextH}>ჩვენ შესახებ</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </>
    </View>
  );
}
