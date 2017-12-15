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

const { width } = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <SimpleLineIcons name="bag" size={45} color="#00B2BF" />
        </View>

        <View style={styles.login}>
          <Text style={styles.loginText}>LOGIN</Text>
          <Text style={styles.text}>Email</Text>

          <View style={styles.textInput}>
            <MaterialCommunityIcons
              name="email-open-outline"
              size={20}
              color={"#009ACD"}
              style={styles.icon}
            />
            <TextInput
              keyboardType={"email-address"}
              underlineColorAndroid={"transparent"}
              style={styles.input}
              placeholder="Enter Email"
            />
          </View>

          <Text style={styles.text}>Password</Text>

          <View style={styles.textInput}>
            <Feather
              name="lock"
              size={20}
              color={"#009ACD"}
              style={styles.icon}
            />
            <TextInput
              secureTextEntry={true}
              underlineColorAndroid={"transparent"}
              style={styles.input}
              placeholder="Enter Password"
            />
          </View>
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate("Content")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewUnder} />
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
        <View
          style={{
            position: "absolute",
            bottom: 10,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.reText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    elevation: 5
  },
  textInput: {
    marginLeft: 20,
    marginTop: 10,
    width: width - 70,
    height: 40,
    borderWidth: 1,
    borderColor: "#CDC5BF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5
  },
  login: {
    marginTop: -30,
    width: width - 30,
    height: 330,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 4
  },
  loginText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30
  },
  text: {
    fontSize: 17,
    color: "#898989",
    marginLeft: 20,
    marginTop: 10
  },
  icon: {
    marginLeft: 10
  },
  input: {
    width: 200,
    marginLeft: 15,
    fontSize: 16,
    color: "#898989"
  },
  forgotPass: {
    alignSelf: "flex-end"
  },
  forgotPassText: {
    color: "#009ACD",
    marginRight: 20
  },
  loginButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#009ACD"
  },
  loginButton: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15
  },
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
  },
  register: {
    fontSize: 17,
    color: "#009ACD"
  },
  reText: {
    fontSize: 17,
    color: "#898989"
  },
  viewUnder: {
    width: width - 110,
    height: 30,
    marginTop: -10,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 5
  }
};
