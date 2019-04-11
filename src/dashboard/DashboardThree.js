import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Style from "../Style";
import Toolbar from "../common/Toolbar";

export default class DashboardThree extends Component {
  render() {
    return (
      <SafeAreaView style={{ ...Style.init }}>
        <View style={{ ...Style.container }}>
          <Toolbar name={"In Care"} />
          {/** Top card */}
          <View
            style={{
              ...Style.row,
              ...Style.initHorizontal,
              ...Style.initVertical,
              flex: 1,
              marginTop: 12,
              backgroundColor: "#ffffff",
              shadowColor: "#298F42",
              shadowOpacity: 0.5,
              shadowOffset: {
                height: 0.6 * 2
              }
            }}
          >
            <View style={{ justifyContent: "flex-end", flex: 1 }}>
              <Text style={{ color: "#4D4F5C", fontSize: 15 }}>
                Total In care
              </Text>
              <Text style={{ ...Style.leadingText, marginTop: 20 }}>
                17,923
              </Text>
              <Text style={{ color: "#FF4141" }}>+13.8%</Text>
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
                ...Style.initHorizontal
              }}
            >
              <Text style={{ color: "#4D4F5C", fontSize: 18 }}>Money</Text>
            </View>
            <View
              style={{
                ...Style.row,
                justifyContent: "space-between",
                paddingBottom: 10,
                borderBottomColor: "#00000010",
                borderBottomWidth: 2,
                marginHorizontal: 20
              }}
            >
              <Text
                style={{
                  color: "#4D4F5C",
                  fontSize: 15,
                  fontWeight: "500"
                }}
              >
                Total Budget
              </Text>
              <Text
                style={{
                  color: "#4AD991",
                  fontSize: 15,
                  fontWeight: "500"
                }}
              >
                $50,000
              </Text>
            </View>
            {/* Big chart */}
            <View
              style={{
                flex: 4,
                ...Style.initVertical
              }}
            >
              <Image
                source={require("../assets/piechart.png")}
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
                  <Text style={{ fontSize: 15, color: "#43425D" }}>
                    Total Spent
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "#43425D50", marginTop: 4 }}
                  >
                    $18,570
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15, color: "#43425D" }}>
                    Money Saved
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "#43425D50", marginTop: 4 }}
                  >
                    $13,430
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  ...Style.initVertical,
                  paddingVertical: 20,
                  marginTop: 20,
                  borderTopColor: "#00000040",
                  borderTopWidth: 0.5,
                  marginHorizontal: 20
                }}
              >
                <Text style={{ textAlign: "center", color: "#3B86FF" }}>
                  View Full Report
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Statistics end */}
        </View>
      </SafeAreaView>
    );
  }
}
