import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "../../src/Style";
import Style from "../../src/Style";

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
            marginHorizontal: 20
          }}
        >
          <Image
            source={require("../assets/avonlogo.png")}
            style={{ alignSelf: "center", marginTop: 20 }}
          />
          <View
            style={{
              justifyContent: "space-around",
              paddingVertical: 80,
              flex: 1
            }}
          >
            <TouchableOpacity
              style={{ ...styles.button1, marginBottom: 50 }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ ...styles.button1text }}>Login</Text>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  ...Style.homeTextStyle,
                  color: "#4A2E5B",
                  fontStyle: "italic"
                }}
              >
                Don’t have an account?
              </Text>
            </View>
            <TouchableOpacity
              style={{ ...styles.button1accent }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ ...styles.button1accenttext }}>
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
