import { View, Image, styles } from "react-native";

const BottomIcons = () => {
  <View>
    <View style={styles.restrictionContainer}>
      <Image
        source={require("../assets/icon3.png")}
        style={styles.restriction2}
      />
      <Image 
        source={require("../assets/photos/R18.png")}
        style={styles.restriction}
      />
    </View>
  </View>;
};


export default BottomIcons();
