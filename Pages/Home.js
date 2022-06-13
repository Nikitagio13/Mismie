import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';


export default function Home({ navigation }) {

  
  const pressHandlerGames = () => {
      navigation.navigate("Games")
  };

  const pressHandlerAbout = () => {
      navigation.navigate("About")
  };

  const pressHandlerBonusCards = () => {
    navigation.navigate("BonusCards")
};


const hapticL = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
}


    
         return (
            <View style={styles.container}>
              
            <View style={styles.homePageImages}>
                <Image source={require('../assets/photos/wine-bottles.png')} style={styles.homePageImage1} />
                <Image source={require('../assets/photos/R18.png')} style={styles.homePageImage2} />
             </View>

              <>
                <Image source={require("../assets/photos/mismieLogo2.png")} style={{width: 350, height:350, position:'relative', bottom: 120}}/>
                <Text style={styles.subtitle}>თრობის ახალი ეპოქა</Text>
                
                <View style={{position: "relative", bottom: 160}}>
                    <TouchableOpacity style={styles.button}  onPress={() => {pressHandlerGames(); hapticL()}}><Text style={styles.buttonText}>თამაშები</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {pressHandlerBonusCards(); hapticL()}}><Text style={styles.buttonText}>ბონუს კარტები</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}  onPress={() => {pressHandlerAbout(); hapticL()}}><Text style={styles.buttonText}>ჩვენ შესახებ</Text></TouchableOpacity>
                </View>  
                    
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
    // title: {
    //   fontSize: 70,
    //   color: "#FFC5EC",
    //   position: 'relative',
    //   bottom: 100,
    //   letterSpacing: 7,
    //   fontFamily: 'alk_life',
    // },
    subtitle: {
      color: '#FFC5EC',
      position: 'relative',
      bottom: 230,
      fontSize:  18,
      fontFamily: 'alk_life',
    },
    homePageImages: {
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems:'center', 
      position: 'relative',
      top: 600,
    },
    homePageImage1: {
      width: 60, 
      height: 60,
      marginRight: 30
    },
    homePageImage2: {
      width: 60, 
      height: 60,
    },
    button: {
      backgroundColor:"#5325",
      paddingVertical: 12,
      paddingHorizontal: 30,
      width: 270,
      alignItems: 'center',
      position: 'relative',
      top: 15,
      marginTop: 16,
      borderRadius:30,
      
  },
    buttonText: {
      color:"#FFC300",
      fontSize: 24.5,
      fontFamily: 'alk_life',
      textAlign: "center"
  }

  }); 

