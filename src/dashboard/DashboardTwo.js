import React, { Component } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import Style, { toolbarBackColor, white } from "../Style";
import Toolbar from "../common/Toolbar";

export default class DashboardTwo extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ ...Style.init, backgroundColor: toolbarBackColor }}
      >
        <View style={{ ...Style.container, backgroundColor: white }}>
          <Toolbar name={"All Cares"} />
          {/** Top card */}
          <View
            style={{
              ...Style.row,
              ...Style.initHorizontal,
              ...Style.initVertical,
              flex: 1,
              backgroundColor: white,
              shadowColor: "#5F5165",
              shadowOpacity: 0.5,
              shadowOffset: {
                height: 0.6 * 2
              },
              marginHorizontal: 4
            }}
          >
            <View
              style={{
                justifyContent: "flex-end",
                flex: 1
              }}
            >
              <Text style={{ fontSize: 15, color: "#4D2F8F50" }}>
                Total Cares
              </Text>
              <Text
                style={{
                  ...Style.leadingText,
                  marginTop: 20,
                  color: "#4D2F8F"
                }}
              >
                20,000
              </Text>
              <Text style={{ color: "#3CC480" }}>+13.0%</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <Image
                source={require("../assets/topchart.png")}
                style={{ resizeMode: "center" }}
              />
            </View>
          </View>
          {/* Top card end */}
          {/* Statistics start */}
          <View style={{ flex: 4 }}>
            <View
              style={{
                ...Style.row,
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                ...Style.initHorizontal,
                backgroundColor: white
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Statistics
              </Text>
              <Text>Drop down</Text>
            </View>
            {/* Big chart */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 4,
                backgroundColor: "purple"
              }}
            >
              <Image
                source={require("../assets/linechart.png")}
                style={{
                  backgroundColor: "yellow",
                  resizeMode: "cover"
                }}
              />
            </View>
          </View>
          {/* Statistics end */}
        </View>
      </SafeAreaView>
    );
  }
}
