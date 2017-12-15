import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Home from "./js/Home.js";
import Content from "./js/Content.js";
import Register from "./js/Register.js";
import Footer from "./js/Footer.js";
import { Navigation } from "./js/SwitchPage.js";

export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}
