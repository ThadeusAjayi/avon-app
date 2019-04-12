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
import Icon from "react-native-vector-icons/FontAwesome";

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
              style={{
                alignSelf: "center",
                marginVertical: 40
              }}
            />

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 28,
                color: "#9B8ABD80",
                textAlign: "center",
                marginBottom: 40
              }}
            >
              Log in
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 60
              }}
            >
              <View style={{ position: "absolute", left: 4, top: 6 }}>
                <Icon name={"envelope"} color={"#62479B80"} size={12} />
              </View>
              <TextInput
                style={{
                  ...styles.loginInput
                }}
                placeholder={"Email"}
                placeholderTextColor={"#4A2E5B50"}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 60
              }}
            >
              <View style={{ position: "absolute", left: 4, top: 6 }}>
                <Icon name={"lock"} color={"#62479B80"} size={16} />
              </View>
              <TextInput
                style={{
                  ...styles.loginInput
                }}
                placeholder={"Password"}
                placeholderTextColor={"#4A2E5B50"}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
                autoCapitalize={"none"}
              />
            </View>
            <TouchableOpacity
              style={{
                ...styles.button1
              }}
              onPress={() => this.props.navigation.navigate("Dashboard")}
            >
              <Text style={{ ...styles.button1text }}>Log in</Text>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                marginVertical: 40,
                color: "#4A2E5B",
                fontSize: 22,
                fontStyle: "italic",
                fontWeight: "300"
              }}
            >
              Don’t have an account?
            </Text>
            <View style={{ alignItems: "center", marginBottom: 30 }}>
              <Icon name={"chevron-down"} color={"#ffffff50"} size={50} />
            </View>
            <TouchableOpacity
              style={{ ...styles.button1accent }}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text style={{ ...styles.button1accenttext }}>Register</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
