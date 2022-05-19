import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


    cardImages: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      shadowColor: 'black',
      shadowOpacity: .5,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 12,
      marginTop: 80,
    },
  
    card: {
      width: '85%',
      height: '93%',
      borderRadius: 15,
    },
  
    image: {
      flex: 1,
      justifyContent: "center",
      height: 1000,
    },
  
    cardsFromData: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: "85%",
      height: "96%",
     borderRadius: 10,
    }
  
  
     }
  )

