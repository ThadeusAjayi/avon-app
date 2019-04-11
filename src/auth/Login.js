import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import styles from "../Style";
import { colorPrimary } from "../Style";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <SafeAreaView style={{ ...styles.container }}>
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
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={100}
          style={{ ...styles.container }}
        >
          <ScrollView style={{ ...styles.init }}>
            <Image
              source={require("../assets/avonlogo.png")}
              style={{ alignSelf: "center", marginBottom: 80, marginTop: 40 }}
            />

            <View
              style={{
                flexDirection: "row",
                marginBottom: 60,
                marginHorizontal: 20
              }}
            >
              <TextInput
                style={{
                  ...styles.loginInput
                }}
                placeholder={"email"}
                placeholderTextColor={colorPrimary}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 60,
                marginHorizontal: 20
              }}
            >
              <TextInput
                style={{
                  ...styles.loginInput
                }}
                placeholder={"password"}
                placeholderTextColor={colorPrimary}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={{
                ...styles.button1,
                marginHorizontal: 40,
                marginVertical: 60
              }}
            >
              <Text style={{ ...styles.button1text }}>Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
