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

export default class App extends Component {
  render() {
    return <AvonNavigation />;
  }
}
