import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Components/stylesForCards';
import * as Haptics from 'expo-haptics';


export default function SextynineRules({ navigation }) {

    const pressHandlerSextynineR = () => {
        navigation.navigate("Sextynine")
    };

    const hapticForStart = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }

  return (

    <View style={styles.gamesView}>
       <View style={styles.mainContainer}>
                <Text style={styles.gamesText}>
                        Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
                        et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur! DDD
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {pressHandlerSextynineR(); hapticForStart()}}><Text style={styles.buttonText}>თამაშის დაწყება</Text></TouchableOpacity>
         </View> 
          
         <View style={styles.restrictionContainer}>
                <Image source={require("../assets/icon3.png")} style={styles.restriction2}/>
                <Image source={require("../assets/photos/R18.png")} style={styles.restriction} />
          </View>
         
    </View>
  )
}

