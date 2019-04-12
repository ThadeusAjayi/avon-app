import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  FlatList,
  Image
} from "react-native";
import PureChart from "react-native-pure-chart";
import DashboardCard from "./DashboardCard";
import Style, { toolbarBackColor, white } from "../Style";
import Toolbar from "../common/Toolbar";

let sampleData = [
  {
    seriesName: "series1",
    data: [
      { x: "2018-02-01", y: 30 },
      { x: "2018-02-02", y: 200 },
      { x: "2018-02-03", y: 170 },
      { x: "2018-02-04", y: 250 },
      { x: "2018-02-05", y: 10 }
    ],
    color: "#A4A1FB"
  },
  {
    seriesName: "series2",
    data: [
      { x: "2018-02-01", y: 20 },
      { x: "2018-02-02", y: 100 },
      { x: "2018-02-03", y: 140 },
      { x: "2018-02-04", y: 550 },
      { x: "2018-02-05", y: 40 }
    ],
    color: "#56D9FE"
  },
  {
    seriesName: "series2",
    data: [
      { x: "2018-02-01", y: 20 },
      { x: "2018-02-02", y: 100 },
      { x: "2018-02-03", y: 140 },
      { x: "2018-02-04", y: 550 },
      { x: "2018-02-05", y: 40 }
    ],
    color: "#5FE3A1"
  }
];

export default class DashboardOne extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ ...Style.init, backgroundColor: toolbarBackColor }}
      >
        {/* <Image
          source={require("../assets/background.png")}
          style={{ ...Style.backImage }}
        /> */}
        <View style={{ backgroundColor: white, flex: 2 }}>
          <Toolbar name={"Dashboard"} navigation={this.props.navigation} />
          <Text style={{ ...Style.homeTextStyle }}>
            Tap on card to view detail
          </Text>
          <View style={{ ...Style.row }}>
            <DashboardCard
              data={data.allCare}
              color={"#E0535350"}
              textColor={"#298F42"}
            />
            <DashboardCard
              data={data.inCare}
              color={"#298F4250"}
              textColor={"#E05353"}
            />
          </View>
          <View style={{ ...Style.row }}>
            <DashboardCard
              data={data.invoicedCare}
              color={"#65009250"}
              textColor={"#A28C43"}
            />
            <DashboardCard
              data={data.closedCare}
              color={"#A28C4350"}
              textColor={"#650092"}
            />
          </View>
        </View>
        <View
          style={{
            alignContent: "center",
            flexDirection: "row",
            justifyContent: "center",
            elevation: 4,
            shadowOpacity: 0.2,
            shadowOffset: {
              height: 0.6 * 2
            },
            flexDirection: "column",
            backgroundColor: white,
            flex: 1
          }}
        >
          <View style={{ position: "relative", backgroundColor: white }}>
            <PureChart data={sampleData} type="bar" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const data = {
  allCare: {
    title: "All Care",
    amount: "20,000"
  },
  inCare: {
    title: "In Care",
    amount: "20,000"
  },
  invoicedCare: {
    title: "Invoiced Care",
    amount: "20,000"
  },
  closedCare: {
    title: "Closed Care",
    amount: "20,000"
  }
};
