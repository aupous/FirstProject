import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  Entypo,
  Ionicons
} from "@expo/vector-icons";
import Footer from "./Footer.js";

class Register extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <TouchableOpacity
          style={{ alignSelf: "flex-start", marginLeft: 10, marginBottom: 10 }}
        >
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.registerView}>
            <Text style={styles.registerText}>REGISTER</Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                position: "absolute",
                right: 10,
                top: 15
              }}
            >
              <Ionicons name="md-person-add" size={20} color={"#009ACD"} />
              <Text style={{ color: "#009ACD", fontSize: 16, marginLeft: 4 }}>
                Profile Pic
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Name</Text>

          <View style={styles.textInput}>
            <FontAwesome
              name="user"
              size={20}
              color={"#009ACD"}
              style={styles.icon}
            />
            <TextInput
              underlineColorAndroid={"transparent"}
              style={styles.input}
              placeholder="Enter name"
            />
          </View>
          <Text style={styles.text}>Phone Number</Text>
          <View style={styles.textInput}>
            <FontAwesome
              name="phone"
              size={20}
              color={"#009ACD"}
              style={styles.icon}
            />
            <TextInput
              underlineColorAndroid={"transparent"}
              style={styles.input}
              placeholder="Enter number"
            />
          </View>
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
              placeholder="Enter email"
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
              placeholder="Enter password"
            />
          </View>
        </View>
        <View style={styles.viewUnder} />
        <Footer />
        <View
          style={{
            position: "absolute",
            bottom: 10,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.loText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = {
  page: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    width: width - 30,
    height: 400,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 4
  },
  registerView: {
    flexDirection: "row",
    alignItems: "center"
  },
  registerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 15
  },
  text: {
    fontSize: 17,
    color: "#898989",
    marginLeft: 20,
    marginTop: 10
  },
  input: {
    width: 200,
    marginLeft: 15,
    fontSize: 16,
    color: "#898989"
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
  icon: {
    marginLeft: 10
  },
  login: {
    fontSize: 17,
    color: "#009ACD"
  },
  loText: {
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
export default Register;
