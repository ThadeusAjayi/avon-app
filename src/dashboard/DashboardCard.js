import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Style from "../Style";

const { width, height } = Dimensions.get("window");

export default function DashboardCard(props) {
  return (
    <TouchableOpacity
      style={{ ...Style.dashboardCard, backgroundColor: props.color }}
    >
      <Text style={{ color: "#5F5165", fontWeight: "bold" }}>All Care</Text>
      <Text style={{ color: props.textColor, ...Style.leadingText }}>
        20,000
      </Text>
    </TouchableOpacity>
  );
}
