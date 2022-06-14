import React  from 'react'
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';


export default function Games({ navigation }) {


     const pressHandlerSextynineRules = () => {
        navigation.navigate('SextynineRules')
};

     const pressHandlerDamisxiRules = () => {
        navigation.navigate('DamisxiRules')
};

     const pressHandlerKidevDamisxiRules = () => {
        navigation.navigate('KidevDamisxiRules')
};

     const pressHandlerIsevDamisxiRules = () => {
        navigation.navigate('IsevDamisxiRules')
};

     const pressHandlerDampluriRules = () => {
        navigation.navigate('DampluriRules')
};

     const pressHandlerIgrialeRules = () => {
        navigation.navigate('IgrialeRules')
};

const pressHandlerBonusCards = () => {
        navigation.navigate('BonusCards')
};


const hapticsM = () => {
        Haptics.selectionAsync()
}

      

return (

            <ScrollView style={styles.scrollview}>
                <View style={styles.container}>

                        <TouchableOpacity onPress={() => {pressHandlerSextynineRules(); hapticsM()}}>
                                <View style={styles.contForImg}>
                                        <Image source={require("../assets/photos/69.png")} style={styles.gameicon} />
                                </View>
                                <Text style={styles.gameName}>სექსთინაინ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {pressHandlerDamisxiRules(); hapticsM()}}>
                                <View style={styles.contForImg}>
                                        <Image source={require("../assets/photos/damisxi1.jpg")} style={styles.gameicon} />
                                </View>
                                <Text style={styles.gameName}>დამისხი დამალევინე</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => {pressHandlerIsevDamisxiRules(); hapticsM()}}>
                                <View style={styles.contForImg}>
                                        <Image source={require('../assets/photos/isevDamisxi.png')} style={styles.gameicon} />
                                </View>
                                <Text style={styles.gameName}>ისევ დამისხი</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {pressHandlerIgrialeRules(); hapticsM()}}>
                                <View style={styles.contForImg}>
                                        <Image source={require("../assets/photos/igriale.png")} style={styles.gameicon} />
                                </View>
                                <Text style={styles.gameName}>იგრიალე ოქრო</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {pressHandlerDampluriRules(); hapticsM()}}>
                                <View style={styles.contForImg}>
                                        <Image source={require("../assets/photos/dampluri.png")} style={styles.gameicon} />
                                </View>
                                <Text style={styles.gameName}>დამპლური თამაშები</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() =>{pressHandlerKidevDamisxiRules(); hapticsM()}}>
                                <View style={styles.contForImg}>
                                        <Image source={require("../assets/photos/mismie.jpg")} style={styles.gameicon} />
                                </View>
                                <Text style={styles.gameName}>კიდევ დამისხი</Text>
                        </TouchableOpacity>


                </View>
                        <View style={styles.bonusCardsWrap}>
                                <TouchableOpacity style={styles.bonusCardsTouchable} onPress={() => {pressHandlerBonusCards(); hapticsM()}}>
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
                  marginBottom: 45,
                  marginHorizontal: 36,
                  
              },
              contForImg: {
                   shadowColor: '#3e403e',
                   shadowOpacity: 0.7,
                   shadowOffset: {
                     width: 0,
                     height: 0,
                   },
                   shadowRadius: 12,
              },
              gameicon: {
                   width: 120,
                   height: 120,
                   borderRadius: 15,
                   marginBottom: 115,
              },
              gameName: {
                  fontFamily: 'alk_life',
                  fontSize: 21,
                  position: 'absolute',
                  right: -20,
                  top: 130,
                  width: 160,
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
              },
  })

