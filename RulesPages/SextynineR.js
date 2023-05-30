import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "../Components/stylesForCards";
import * as Haptics from "expo-haptics";

export default function SextynineRules({ navigation }) {
  const pressHandlerSextynineR = () => {
    navigation.navigate("Sextynine");
  };

  const hapticForStart = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <View style={styles.gamesView}>
      <View style={styles.mainContainer}>
        <Text style={styles.gamesTextForRulesPage}>
          თამაში წყვილებისთვის! გაატარე დაუვიწყარი საღამო შენს ყოფილ, ახლანდელ
          ან მომავალ პარტნიორთან ერთად.{"\n"}
          {"\n"}
          {"\n"}რიგრიგობით იღებთ კარტებს, კითხულობთ მათზე დატანილ დავალებებს,
          რომლებსაც ასრულებთ, ან სვამთ. თუ მძიმე ალკოჰოლური სასმლის გამოყენებით
          თამაშობთ, შეგიძლიათ შეამციროთ დალევის რაოდენობა.{"\n"}
          {"\n"}
          {"\n"} ნებისმიერ მოთამაშეს შეუძლია, ნებისმიერ დროს, გამოეთიშოს თამაშს.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            pressHandlerSextynineR();
            hapticForStart();
          }}
        >
          <Text style={styles.buttonText}>თამაშის დაწყება</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.restrictionContainer}>
        <Image
          source={require("../assets/icon3.png")}
          style={styles.restriction2}
        />
        <Image
          source={require("../assets/photos/R18.png")}
          style={styles.restriction}
        />
      </View>
    </View>
  );
}
