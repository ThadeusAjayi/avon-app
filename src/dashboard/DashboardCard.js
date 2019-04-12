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

const switchDestination = title => {
  switch (title) {
    case "All Care":
      return "All Care";
    case "In Care":
      return "In Care";
    default:
      return "";
  }
};

export default function DashboardCard(props) {
  return (
    <TouchableOpacity
      style={{ ...Style.dashboardCard, backgroundColor: props.color }}
      onPress={() =>
        props.navigation.navigate(switchDestination(props.data.title))
      }
    >
      <Text style={{ color: "#5F5165", fontWeight: "bold" }}>
        {props.data.title}
      </Text>
      <Text style={{ color: props.textColor, ...Style.leadingText }}>
        {props.data.amount}
      </Text>
    </TouchableOpacity>
  );
}
