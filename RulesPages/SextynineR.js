import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SextynineRules({ navigation }) {

    const pressHandlerSextynineR = () => {
        navigation.navigate("Sextynine")
    };

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
                <TouchableOpacity style={styles.button} onPress={() => pressHandlerSextynineR()}><Text style={styles.buttonText}>თამაშის დაწყება</Text></TouchableOpacity>
         </View> 
          
         <View style={styles.restrictionContainer}>
                <Image source={require("../assets/icon3.png")} style={styles.restriction2}/>
                <Image source={require("../assets/photos/R18.png")} style={styles.restriction} />
          </View>
         
    </View>
  )
}

const styles = StyleSheet.create({
        
        gamesView: {
            backgroundColor: '#CE63AB',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 38,
        },
        mainContainer: {
            position: "relative",
            top: 60
        },
        gamesText: {
            color: 'white',
            fontSize: 14.5,
            textAlign: "justify"
        },
        button: {
            backgroundColor:"#5325",
            paddingVertical: 12,
            paddingHorizontal: 30,
            width: 300,
            alignItems: 'center',
            position: 'relative',
            top: 55,
            marginTop: 16,
            borderRadius:30,
          
        },
          buttonText: {
            color:"#FFC300",
            fontSize: 24.5,
            fontFamily: 'alk_life',
            textAlign: "center"
        },
         restrictionContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
            position:'relative',
            top: 185,
            right: 14
         },
          restriction: {
            width: 60,
            height: 60,
        },
        restriction2: {
            width: 190,
            height: 190,
            position: "relative",
            bottom: 65
        }
    }
)




