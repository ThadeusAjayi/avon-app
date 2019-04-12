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

export default class Signup extends Component {
  state = {
    firstname: "",
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
              style={{
                alignSelf: "center",
                marginVertical: 40
              }}
            />

            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  color: "#9B8ABD80"
                }}
              >
                Register
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
                }}
              >
                <TextInput
                  style={{
                    ...styles.loginInput
                  }}
                  placeholder={"First Name"}
                  placeholderTextColor={"#4A2E5B50"}
                  onChangeText={email => this.setState({ firstname })}
                  value={this.state.email}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
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
                  marginHorizontal: 40
                }}
              >
                <Text style={{ ...styles.button1text }}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
