import {
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

const drawerNavigation = createDrawerNavigator({
  Care: "CareManagement",
  Account: "AccountManagement"
});
