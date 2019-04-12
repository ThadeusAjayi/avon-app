import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import Style, { white } from "../../src/Style";
import Icon from "react-native-vector-icons/FontAwesome";

export default class StartScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ ...Style.init }}>
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
            ...Style.init
          }}
        >
          <Image
            source={require("../assets/avonlogo.png")}
            style={{ alignSelf: "center", marginTop: 40 }}
          />
          <View
            style={{
              justifyContent: "space-around",
              paddingVertical: 80,
              flex: 1
            }}
          >
            <TouchableOpacity
              style={{
                ...Style.button1,
                marginBottom: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  ...Style.button1text,
                  alignSelf: "center"
                }}
              >
                Login
              </Text>
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  right: 20,
                  backgroundColor: "#4A2E5B51",
                  paddingVertical: 10,
                  paddingHorizontal: 11,
                  borderRadius: 60
                }}
              >
                <Icon name={"chevron-right"} color={"#000000"} size={10} />
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  ...Style.homeTextStyle,
                  color: "#4A2E5B",
                  fontStyle: "italic",
                  fontWeight: "200"
                }}
              >
                Don’t have an account?
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Icon name={"chevron-down"} color={"#4A2E5B40"} size={50} />
            </View>

            <TouchableOpacity
              style={{
                ...Style.button1accent,
                marginBottom: 50,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text
                style={{
                  ...Style.button1accenttext,
                  alignSelf: "center"
                }}
              >
                Register
              </Text>
              <View
                style={{
                  alignItems: "center",
                  position: "absolute",
                  right: 20,
                  backgroundColor: white,
                  paddingVertical: 10,
                  paddingHorizontal: 11,
                  borderRadius: 60
                }}
              >
                <Icon name={"chevron-right"} color={"#000000"} size={10} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
