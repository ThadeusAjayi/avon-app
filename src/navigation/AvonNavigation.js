import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import LoginScreen from "../auth/Login";
import StartScreen from "../auth/StartScreen";

const entryNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Start: StartScreen
  },
  {
    initialRouteName: "Start"
  }
);

StartScreen.navigationOptions = {
  header: null
};

LoginScreen.navigationOptions = {
  header: null
};

export default createAppContainer(entryNavigation);
