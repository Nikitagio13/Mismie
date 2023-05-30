import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../Pages/Home";
import Games from "../Pages/Games";
import About from "../Pages/About";
import BonusCards from "../Pages/BonusCards";
import Sextynine from "../Games/Sextynine";
import Damisxi from "../Games/Damisxi";
import Dampluri from "../Games/Dampluri";
import IsevDamisxi from "../Games/IsevDamisxi";
import KidevDamisxi from "../Games/KidevDamisxi";
import Igriale from "../Games/Igriale";
import SextynineRules from "../RulesPages/SextynineR";
import DamisxiRules from "../RulesPages/DamisxiR";
import KidevDamisxiRules from "../RulesPages/KidevDamisxiR";
import IsevDamisxiRules from "../RulesPages/IsevDamisxiR";
import DampluriRules from "../RulesPages/DampluriR";
import IgrialeRules from "../RulesPages/IgrialeR";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => false,
    },
  },
  Games: {
    screen: Games,
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: "white",
      title: "თამაშები",
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 5,
      },
      headerBackTitle: () => null,
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: "ჩვენს შესახებ",
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 28,
        letterSpacing: 1,
      },
      headerTintColor: "white",
      headerTransparent: true,
      headerBackTitle: () => null,
    },
  },
  BonusCards: {
    screen: BonusCards,
    navigationOptions: {
      title: "ბონუს კარტები",
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 28,
        letterSpacing: 1,
      },
      headerTintColor: "white",
      headerTransparent: true,
      headerBackTitle: () => null,
    },
  },
  Sextynine: {
    screen: Sextynine,
    navigationOptions: {
      title: "სექსთინაინ",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 25,
        letterSpacing: 1,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
    },
  },
  Damisxi: {
    screen: Damisxi,
    navigationOptions: {
      title: "დამისხი დამალევინე",
      headerTransparent: true,
      headerTintColor: "black",
      headerTitleStyle: {
        color: "black",
        fontFamily: "alk_life",
        fontSize: 20,
        letterSpacing: 1,
      },
      headerBackTitle: () => null,
    },
  },
  Dampluri: {
    screen: Dampluri,
    navigationOptions: {
      title: "დამპლური თამაშები",
      headerTransparent: true,
      headerTintColor: "white",
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 20,
        letterSpacing: 1,
      },
      headerBackTitle: () => null,
    },
  },
  KidevDamisxi: {
    screen: KidevDamisxi,
    navigationOptions: {
      title: "კიდევ დამისხი",
      headerTransparent: true,
      headerTintColor: "white",
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 22,
        letterSpacing: 1,
        textAlign: "center",
      },
      headerBackTitle: () => null,
    },
  },
  IsevDamisxi: {
    screen: IsevDamisxi,
    navigationOptions: {
      title: "ისევ დამისხი",
      headerTransparent: true,
      headerTintColor: "white",
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 22,
        letterSpacing: 1,
      },
      headerBackTitle: () => null,
    },
  },
  Igriale: {
    screen: Igriale,
    navigationOptions: {
      title: "იგრიალე ოქრო",
      headerTransparent: true,
      headerTintColor: "black",
      headerTitleStyle: {
        color: "black",
        fontFamily: "alk_life",
        fontSize: 25,
        letterSpacing: 1,
      },
      headerBackTitle: () => null,
    },
  },
  SextynineRules: {
    screen: SextynineRules,
    navigationOptions: {
      title: "წესები:",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 21.5,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
      transitionConfig: () => {
        return { screenInterpolator: CardStackStyleInterpolator.forHorizontal };
      },
    },
  },
  DamisxiRules: {
    screen: DamisxiRules,
    navigationOptions: {
      title: "წესები:",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 21.5,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
    },
  },
  DampluriRules: {
    screen: DampluriRules,
    navigationOptions: {
      title: "წესები:",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 21.5,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
    },
  },
  KidevDamisxiRules: {
    screen: KidevDamisxiRules,
    navigationOptions: {
      title: "წესები:",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 21.5,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
    },
  },
  IsevDamisxiRules: {
    screen: IsevDamisxiRules,
    navigationOptions: {
      title: "წესები:",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 21.5,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
    },
  },
  IgrialeRules: {
    screen: IgrialeRules,
    navigationOptions: {
      title: "წესები:",
      headerTransparent: true,
      headerTitleStyle: {
        color: "white",
        fontFamily: "alk_life",
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 21.5,
      },
      headerTintColor: "white",
      headerBackTitle: () => null,
    },
  },
};

const GamesStack = createStackNavigator(screens);
export default createAppContainer(GamesStack);
