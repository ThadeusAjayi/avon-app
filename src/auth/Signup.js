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
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Style";
import { colorPrimary } from "../Style";

export default class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    department: ""
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
          <ScrollView
            style={{ ...styles.init }}
            contentContainerStyle={{ paddingBottom: 40 }}
          >
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
                  fontSize: 28,
                  color: "#9B8ABD80",
                  textAlign: "center",
                  marginBottom: 40
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
                <View style={{ position: "absolute", left: 4, top: 6 }}>
                  <Icon name={"user-circle"} color={"#62479B80"} size={14} />
                </View>
                <TextInput
                  style={{
                    ...styles.loginInput
                  }}
                  placeholder={"First Name"}
                  placeholderTextColor={"#4A2E5B50"}
                  onChangeText={firstname => this.setState({ firstname })}
                  value={this.state.firstname}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
                }}
              >
                <View style={{ position: "absolute", left: 4, top: 6 }}>
                  <Icon name={"user-circle"} color={"#62479B80"} size={14} />
                </View>
                <TextInput
                  style={{
                    ...styles.loginInput
                  }}
                  placeholder={"Last Name"}
                  placeholderTextColor={"#4A2E5B50"}
                  onChangeText={lastname => this.setState({ lastname })}
                  value={this.state.lastname}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
                }}
              >
                <View style={{ position: "absolute", left: 4, top: 6 }}>
                  <Icon name={"envelope"} color={"#62479B80"} size={14} />
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
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
                }}
              >
                <View style={{ position: "absolute", left: 4, top: 6 }}>
                  <Icon name={"phone"} color={"#62479B80"} size={14} />
                </View>
                <TextInput
                  style={{
                    ...styles.loginInput
                  }}
                  placeholder={"Mobile"}
                  placeholderTextColor={"#4A2E5B50"}
                  onChangeText={phone => this.setState({ phone })}
                  value={this.state.phone}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
                }}
              >
                <View style={{ position: "absolute", left: 4, top: 6 }}>
                  <Icon name={"server"} color={"#62479B80"} size={14} />
                </View>
                <TextInput
                  style={{
                    ...styles.loginInput
                  }}
                  placeholder={"Department"}
                  placeholderTextColor={"#4A2E5B50"}
                  onChangeText={department => this.setState({ department })}
                  value={this.state.department}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 60
                }}
              >
                <View style={{ position: "absolute", left: 4, top: 6 }}>
                  <Icon name={"lock"} color={"#62479B80"} size={14} />
                </View>
                <TextInput
                  style={{
                    ...styles.loginInput
                  }}
                  placeholder={"password"}
                  placeholderTextColor={"#4A2E5B50"}
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
                onPress={() => this.props.navigation.navigate("Dashboard")}
              >
                <Text style={{ ...styles.button1text }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
