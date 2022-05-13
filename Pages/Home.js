import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import  FlatButton  from '../Components/button';


export default function Home({ navigation }) {

  

  const pressHandlerGames = () => {
      navigation.navigate("Games")
  }

  const pressHandlerAbout = () => {
      navigation.navigate("About")
  }

  const pressHandlerBonusCards = () => {
    navigation.navigate("BonusCards")
}

    
         return (
            <View style={styles.container}>
            <View style={styles.homePageImages}>
                <Image source={require('../assets/photos/wine-bottles.png')} style={styles.homePageImage1} />
                <Image source={require('../assets/photos/R18.png')} style={styles.homePageImage2} />
             </View>
              <>
                <Text style={styles.title}>მისმიე</Text>
                <Text style={styles.subtitle}>თრობის ახალი ეპოქა</Text>
                
                    <FlatButton style={styles.button} text="თამაშები" onPress={pressHandlerGames} />
                    <FlatButton style={styles.button} text="ბონუს კარტები" onPress={pressHandlerBonusCards} />
                    <FlatButton style={styles.button} text="ჩვენ შესახებ" onPress={pressHandlerAbout} />
                    
                    
                <StatusBar style="auto" />
             </>
             </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CE63AB',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontSize: 65,
      color: "#FFC5EC",
      position: 'relative',
      bottom: 67,
      letterSpacing: 7,
      fontFamily: 'alk_life',

    },
    subtitle: {
      color: '#FFC5EC',
      position: 'relative',
      bottom: 61,
      fontSize:  18,
      fontFamily: 'alk_life',
    },
    homePageImages: {
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems:'center', 
      position: 'relative',
      top: 430,
      
    },

    homePageImage1: {
      width: 70, 
      height: 70,
      marginRight: 30
    },

    homePageImage2: {
      width: 70, 
      height: 70,
    }

  }); 

