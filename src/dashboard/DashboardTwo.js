import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Style from "../Style";

export default class DashboardTwo extends Component {
  render() {
    return (
      <SafeAreaView style={{ ...Style.container }}>
        <View style={{ ...Style.container }}>
          {/** Top card */}
          <View
            style={{
              ...Style.row,
              ...Style.initHorizontal,
              ...Style.initVertical,
              flex: 1,
              backgroundColor: "blue"
            }}
          >
            <View style={{ justifyContent: "flex-end", flex: 1 }}>
              <Text>Total Cares</Text>
              <Text style={{ ...Style.leadingText, marginTop: 20 }}>
                20,000
              </Text>
              <Text>+13.0%</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <Text>Chart goes here</Text>
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
                backgroundColor: "yellow",
                flex: 1,
                ...Style.initHorizontal
              }}
            >
              <Text>Statistics</Text>
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
              <Text>Here goes the big chart</Text>
            </View>
          </View>
          {/* Statistics end */}
        </View>
      </SafeAreaView>
    );
  }
}
