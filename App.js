import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './Routes/gamesStack';


export default function App() {
     

  let [fontsLoaded] = useFonts({
    "alk_life": require('./assets/fonts/alk_life.otf'),
     'alkLife': require('./assets/fonts/alk_life.otf'),
    "thinGeo": require("./assets/fonts/thingeo.ttf")
  });

  if (!fontsLoaded) {  
    return <AppLoading />
    }

  return(
      <Navigator />
     )
    
}

 