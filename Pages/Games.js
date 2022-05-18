import React  from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';


export default function Games({ navigation }) {


  const pressHandlerSextynine = () => {
    navigation.navigate("Sextynine")
  }

  const pressHandlerDamisxi = () => {
     navigation.navigate("Damisxi")
   }

   const pressHandlerKidevDamisxi = () => {
      navigation.navigate("KidevDamisxi")
    }

     const pressHandlerMismie = () => {
       navigation.navigate("IsevDamisxi")
    }

    const pressHandlerIsevDamisxi = () => {
        navigation.navigate("IsevDamisxi")
     }

    const pressHandlerBonusCards = () => {
            navigation.navigate('BonusCards')
    }
      

return (

            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>

                        <TouchableOpacity onPress={pressHandlerSextynine}>
                                <Image source={require("../assets/photos/69.png")} style={styles.gameicon} />
                                <Text style={styles.gameName}>სექსთინაინ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandlerDamisxi}>
                                <Image source={require("../assets/photos/damisxi1.jpg")} style={styles.gameicon} />
                                <Text style={styles.gameName}>დამისხი დამალევინე</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={pressHandlerIsevDamisxi}>
                                <Image source={require('../assets/photos/isevDamisxi.png')} style={styles.gameicon} />
                                <Text style={styles.gameName}>ისევ დამისხი</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandlerMismie}>
                                <Image source={require("../assets/photos/igriale.png")} style={styles.gameicon} />
                                <Text style={styles.gameName}>იგრიალე ოქრო</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandlerMismie}>
                                <Image source={require("../assets/photos/dampluri.png")} style={styles.gameicon} />
                                <Text style={styles.gameName}>დამპლური თამაშები</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={pressHandlerMismie}>
                                <Image source={require("../assets/photos/mismie.jpg")} style={styles.gameicon} />
                                <Text style={styles.gameName}>რამე ახალი</Text>
                        </TouchableOpacity>


                </View>
                        <View style={styles.bonusCardsWrap}>
                                <TouchableOpacity style={styles.bonusCardsTouchable} onPress={pressHandlerBonusCards}>
                                        <Image style={styles.bonusCards} source={require("../assets/photos/playingcards2.png")} />
                                        <Text style={styles.bonusCardsTxt}>ბონუს კარტები</Text>
                                </TouchableOpacity>
                        </View>
                        
            </ScrollView>

)
  }

const styles = StyleSheet.create({


  scrollview: {
    flex: 1,
    backgroundColor: '#CE63AB', 
    
  },
  container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 140,
      marginBottom: 40,
      marginHorizontal: 45,
      
  },
  gameicon: {
       width: 120,
       height: 120,
       borderRadius: 15,
       marginBottom: 120
  },
  gameName: {
      fontFamily: 'alk_life',
      fontSize: 21,
      position: 'absolute',
      right: -5,
      top: 130,
      width: 130,
      color: '#72000F',
      textAlign: 'center',
  },

  bonusCards: {
        width: 90,
        height: 90,
        marginTop: 20,
        
  },

  bonusCardsTxt: {
        color: '#FFF',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 7,
        paddingBottom: 10,
  },

  bonusCardsTouchable: {
        backgroundColor:"#5325",
        paddingVertical: 11,
        paddingHorizontal: 30,
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
  },

  bonusCardsWrap: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -40,
          paddingBottom: 70
          
  }

  
})

