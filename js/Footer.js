import React from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  Entypo
} from "@expo/vector-icons";

class Footer extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.orWith}>
          <View style={styles.line} />
          <View style={{ width: 80, alignItems: "center" }}>
            <Text style={styles.orWithText}>Or with</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.iconView}>
          <View style={styles.iconCircle}>
            <FontAwesome name="facebook" size={20} color={"#009ACD"} />
          </View>
          <View style={styles.iconCircle}>
            <FontAwesome name="google-plus" size={20} color={"red"} />
          </View>
          <View style={styles.iconCircle}>
            <Entypo name="twitter" size={20} color={"#00B2BF"} />
          </View>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = {
  orWith: {
    width: width - 30,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  line: {
    width: width / 2 - 60,
    height: 2,
    backgroundColor: "#898989"
  },
  orWithText: {
    fontSize: 20,
    color: "#898989"
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    elevation: 4
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  }
};
export default Footer;
