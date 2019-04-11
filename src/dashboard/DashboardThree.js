import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Style from "../Style";

export default class DashboardThree extends Component {
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
              <Text>Total In care</Text>
              <Text style={{ ...Style.leadingText, marginTop: 20 }}>
                17,923
              </Text>
              <Text>+13.8%</Text>
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
              <Text>Money</Text>
            </View>
            <View
              style={{
                ...Style.row,
                ...Style.initHorizontal,
                justifyContent: "space-between"
              }}
            >
              <Text>Total Budget</Text>
              <Text>$50,000</Text>
            </View>
            {/* Big chart */}
            <View
              style={{
                flex: 4,
                backgroundColor: "purple",
                ...Style.initVertical
              }}
            >
              <Image
                source={{
                  uri:
                    "https://cdn1.iconfinder.com/data/icons/charts-and-diagrams-1-1/512/piechart-512.png"
                }}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: "center",
                  alignSelf: "center"
                }}
              />
              <View
                style={{
                  ...Style.row,
                  ...Style.initHorizontal,
                  justifyContent: "space-between",
                  ...Style.initVertical
                }}
              >
                <View>
                  <Text>Total Spent</Text>
                  <Text>$18,570</Text>
                </View>
                <View>
                  <Text>Money Saved</Text>
                  <Text>$13,430</Text>
                </View>
              </View>
              <TouchableOpacity
                style={{ ...Style.initVertical, alignSelf: "center" }}
              >
                <Text>View Full Report</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Statistics end */}
        </View>
      </SafeAreaView>
    );
  }
}
