import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';


export default function DampluriRules({ navigation }) {

    const pressHandlerDampluriR = () => {
        navigation.navigate("Dampluri")
    };

    const hapticForStart = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }

  return (

    <View style={styles.gamesView}>
       <View style={styles.mainContainer}>
                <Text style={styles.gamesTextForRulesPage}>
                        <Text style={styles.gamesTextRPDampluri}>ზნეობას და მორალს მოკლებული თამაში. ეცადეთ არ ინანოთ, რომ ის შეიძინეთ.</Text>{'\n'}{'\n'}{'\n'}
                        რიგ-რიგობით იღებთ ბარეთებს, ხმამაღლა კითხულობთ ტექსტებს და იშვერთ თითებს სასურველი მოთამაშისკენ. ყოველ ჯერზე სვამს ის, ვისკენაც ყველაზე მეტ თითს გაიშვერენ და ისინიც, ვინც არავისკენ გაიშვერენ თითს.
                        {'\n'}{'\n'}ნურაფერი გეწყინებათ, ეს მხოლოდ ალბათობაა.
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {pressHandlerDampluriR(); hapticForStart()}}><Text style={styles.buttonText}>თამაშის დაწყება</Text></TouchableOpacity>
         </View> 
          
         <View style={styles.restrictionContainer}>
                <Image source={require("../assets/icon3.png")} style={styles.restriction2}/>
                <Image source={require("../assets/photos/R18.png")} style={styles.restriction} />
          </View>
         
    </View>
  )
}





