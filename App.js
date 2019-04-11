/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import StartScreen from "./src/auth/StartScreen";
import Login from "./src/auth/Login";
import AvonNavigation from "./src/navigation/AvonNavigation";
import DashboardOne from "./src/dashboard/DashboardOne";
import DashboardTwo from "./src/dashboard/DashboardTwo";
import DashboardThree from "./src/dashboard/DashboardThree";
import DashboardNavigation from "./src/navigation/DashboardNavigation";

export default class App extends Component {
  render() {
    return <DashboardNavigation />;
  }
}
