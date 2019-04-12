import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import LoginScreen from "../auth/Login";
import StartScreen from "../auth/StartScreen";
import SignupScreen from "../auth/Signup";
import DashboardNavigation from "./DashboardNavigation";

const entryNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Start: StartScreen,
    Signup: SignupScreen,
    Dashboard: DashboardNavigation
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
SignupScreen.navigationOptions = {
  header: null
};

export default createAppContainer(entryNavigation);
