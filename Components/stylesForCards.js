import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({



//FOR CARDS
    cardImages: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 12,
      marginTop: 60
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: 1000,
      marginLeft: -600
    },
    cardsFromData: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: "85%",
      height: "86%",
      borderRadius: 10,
      resizeMode: "stretch"
    },

    //FOR BEER AND X BUTTON
    viewBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "center",
      marginTop: -8
    },
    beerBtn: {
      height: 85,
      width: 85,
    },
    forbiddenBtn: {
      height: 85,
      width: 85,
    },

    
    //TEXTS FOR GAMES
    textForSextynine: {
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "55%",
      marginTop: 240,
      marginHorizontal: "22%",
      fontSize: 20,
      fontWeight: "bold",
      color: "#ff9d00",
      shadowColor: '#ff2b00',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 10,
    },
    cardImagesSxt: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      shadowColor: '#d96cb1',
      shadowOpacity: .8,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 12,
      marginTop: 60
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: 1000,
      marginLeft: -600
    },

    textForDamisxiz: {
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "55%",
      marginTop: 240,
      marginHorizontal: "22%",
      fontSize: 20,
      fontWeight: "bold",
      color: "#272727"
    },
    

    textForIgriale: {
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      width: "55%",
      marginTop: 240,
      marginHorizontal: "22%",
      fontSize: 20,
      fontWeight: "bold",
      color: "#2a803a",
      shadowColor: '#fff',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 2,
    },
 
    
//TEXT FOR GAME'S RULES
gamesTextForRulesPage: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  fontSize: 18,
  fontWeight: "bold"
},

gamesTextRPDampluri: {
  fontSize: 22,
  fontWeight: "bold",
  color: "#fff"
},


    //FOR RULES PAGE
    gamesView: {
      backgroundColor: '#CE63AB',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 35,
  },
  mainContainer: {
      position: "relative",
      top: 60,
  },
  gamesText: {
      color: 'white',
      fontSize: 14.5,
      textAlign: "justify",
  },
  button: {
      backgroundColor:"#5325",
      paddingVertical: 12,
      width: 300,
      position: 'relative',
      top: 65,
      borderRadius:30,
  },
  buttonViewCont: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
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
      top: 190,
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
  },



//FOR ABOUT PAGE
gamesviewAbout: {
  backgroundColor: 'purple',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 30,
},
gamestextAbout: {
  color: 'white',
  textAlign: "justify"
},



//FOR HOME PAGE
containerH: {
  flex: 1,
  backgroundColor: '#CE63AB',
  alignItems: 'center',
  justifyContent: 'center',
},
subtitleH: {
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
buttonH: {
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
buttonTextH: {
  color:"#FFC300",
  fontSize: 24.5,
  fontFamily: 'alk_life',
  textAlign: "center"
},
  
  
     }
  )

