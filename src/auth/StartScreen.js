import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import styles from "../../src/Style";

export default class StartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ ...styles.init }}>
        <Image
          source={require("../assets/background.png")}
          style={{
            resizeMode: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
        <View
          style={{
            ...styles.init,
            justifyContent: "center",
            marginHorizontal: 20
          }}
        >
          <TouchableOpacity
            style={{ ...styles.button1, marginBottom: 50 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ ...styles.button1text }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button1accent }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ ...styles.button1accenttext }}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
