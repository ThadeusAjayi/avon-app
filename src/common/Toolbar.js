import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Style, { toolbarTextColor } from "../Style";

export default function Toolbar(props) {
  return (
    <View style={{ ...Style.toolbar }}>
      <TouchableOpacity style={{ ...Style.leftAlign, ...Style.container }}>
        <Icon name={"menu"} size={30} color={toolbarTextColor} />
      </TouchableOpacity>
      <Text
        style={{
          ...Style.toolbarText,
          flex: 2
        }}
      >
        {props.name}
      </Text>
      <View style={{ ...Style.container }} />
    </View>
  );
}
