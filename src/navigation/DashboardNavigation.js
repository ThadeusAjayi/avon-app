import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DashboardOne from "../dashboard/DashboardOne";
import DashboardTwo from "../dashboard/DashboardTwo";
import DashboardThree from "../dashboard/DashboardThree";
import Login from "../auth/Login";
import StartScreen from "../auth/StartScreen";

const BottomNavigation = createBottomTabNavigator(
  {
    Dashboard: DashboardOne,
    "All Care": DashboardTwo,
    "In Care": DashboardThree
  },
  {
    initialRouteName: "Dashboard"
  }
);

const drawerNavigation = createDrawerNavigator(
  {
    Home: BottomNavigation,
    Care: Login,
    Account: StartScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(drawerNavigation);
