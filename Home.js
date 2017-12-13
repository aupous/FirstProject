import React from "react";
import { View, Text, TextInput } from "react-native";
import { StackNavigator } from "react-navigation";
import { SimpleLineIcons } from "@expo/vector-icons";

const Home = () => (
  <View style={styles.container}>
    <View style={styles.circle}>
      <SimpleLineIcons name="bag" size={30} color="black" />
    </View>
    <View>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput keyboardType={"email-address"} />
      <Text>Password</Text>
      <TextInput secureTextEntry={true} />
    </View>

    <Text>Hello</Text>
  </View>
);
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Home;
