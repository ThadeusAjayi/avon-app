import { StyleSheet, Dimensions } from "react-native";

export const colorPrimary = "#650092";
export const white = "#ffffff";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  init: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  initHorizontal: {
    paddingHorizontal: 20
  },
  initVertical: {
    paddingVertical: 10
  },
  container: {
    flex: 1
  },
  button1: {
    borderRadius: 50,
    backgroundColor: colorPrimary,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  button1text: {
    fontSize: 23,
    color: white,
    textAlign: "center"
  },
  button1accent: {
    borderRadius: 50,
    backgroundColor: white,
    borderColor: colorPrimary,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  button1accenttext: {
    fontSize: 23,
    color: colorPrimary,
    textAlign: "center"
  },
  loginInput: {
    borderBottomColor: colorPrimary,
    borderBottomWidth: 1.2,
    flex: 1
  },
  dashboardCard: {
    width: width / 2.5,
    paddingVertical: 30,
    elevation: 2,
    shadowOpacity: 2,
    shadowRadius: 2,
    opacity: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 22,
    marginHorizontal: 8,
    marginVertical: 16
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
  leadingText: {
    fontSize: 25,
    fontWeight: "500"
  }
});
