import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';


export default function IsevDamisxiRules({ navigation }) {

    const pressHandlerIsevDamisxiR = () => {
        navigation.navigate("IsevDamisxi")
    };

    const hapticForStart = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }

  return (

    <View style={styles.gamesView}>
       <View style={styles.mainContainer}>
                <Text style={styles.gamesTextForRulesPage}>
                        წესები მარტივია. ერთმანეთის მიყოლებით, საათის ისრის მიმართულებით, იღებთ კარტს და ასრულებთ მასზე დატანილ დავალებას. წინააღმდეგ შეტხვევაში, სვამთ. თუ მძიმე ალკოჰოლური სასმლის გამოყენებით
                        თამაშობთ, შეგიძლიათ შეამციროთ დალევის რაოდენობა.{'\n'}{'\n'}{'\n'} ნებისმიერ მოთამაშეს შეუძლია ნებისმიერ დროს, გამოეთიშოს თამაშს.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {pressHandlerIsevDamisxiR(); hapticForStart()}}><Text style={styles.buttonText}>თამაშის დაწყება</Text></TouchableOpacity>
         </View> 
          
         <View style={styles.restrictionContainer}>
                <Image source={require("../assets/icon3.png")} style={styles.restriction2}/>
                <Image source={require("../assets/photos/R18.png")} style={styles.restriction} />
          </View>
         
    </View>
  )
}






