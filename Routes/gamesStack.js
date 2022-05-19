import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../Pages/Home";
import Games from '../Pages/Games';
import About from "../Pages/About";
import BonusCards from "../Pages/BonusCards";
import Sextynine from '../Games/Sextynine';
import Damisxi from '../Games/Damisxi';
import Dampluri from '../Games/Dampluri';
import IsevDamisxi from '../Games/IsevDamisxi';
import KidevDamisxi from '../Games/KidevDamisxi';
import Igriale from "../Games/Igriale";



const screens = {
    Home: {
        screen:  Home,
        navigationOptions: {
                header: (() => false)
        }
    },
    Games: {
        screen: Games,
        navigationOptions: {
            headerTransparent: true,
            headerTintColor: 'white',
            title: 'თამაშები',
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 22, letterSpacing: 1},
            headerBackTitle: (() => null)
            
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: "ჩვენს შესახებ",
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 22, letterSpacing: 1},
            headerTintColor: 'white',
            headerTransparent: true,
            headerBackTitle:(() => null)
        },
    },
    BonusCards: {
        screen: BonusCards,
        navigationOptions: {
            title: 'ბონუს კარტები',
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 22, letterSpacing: 1},
            headerTintColor: 'white',
            headerTransparent: true,
            headerBackTitle: (() => null)
        }
    },

    Sextynine: {
        screen: Sextynine,
        navigationOptions: {
            title: 'სექსთინაინ',
            headerTransparent: true,
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 22, letterSpacing: 1},
            headerTintColor: 'white',
            headerBackTitle: (() => null)
        }
    },

    Damisxi: {
        screen: Damisxi,
        navigationOptions: {
            title: 'დამისხი დამალევინე',
            headerTransparent: true,
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 20, letterSpacing: 1},
            headerBackTitle: (() => null)
        }
    },

    Dampluri: {
        screen: Dampluri,
        navigationOptions: {
            title: 'დამპლური თამაშები',
            headerTransparent: true,
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 20, letterSpacing: 1},
            headerBackTitle: (() => null)
        }
    },

    KidevDamisxi: {
        screen: KidevDamisxi,
        navigationOptions: {
            title: 'კიდევ დამისხი',
            headerTransparent: true,
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 20, letterSpacing: 1, textAlign: 'center'},
            headerBackTitle: (() => null)
        }
    },

    IsevDamisxi: {
        screen: IsevDamisxi,
        navigationOptions: {
            title: 'ისევ დამისხი',
            headerTransparent: true,
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 20, letterSpacing: 1},
            headerBackTitle: (() => null)
        }
    },

    Igriale: {
        screen: Igriale,
        navigationOptions: {
            title: 'ისევ დამისხი დამალევინე',
            headerTransparent: true,
            headerTitleStyle: {color: 'white', fontFamily: 'alk_life', fontSize: 22, letterSpacing: 1},
            headerBackTitle: (() => null)
        }
    },
}



const GamesStack = createStackNavigator(screens);

export default createAppContainer(GamesStack);