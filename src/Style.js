import { StyleSheet, Dimensions } from "react-native";

export const colorPrimary = "#650092";
export const white = "#ffffff";
export const toolbarTextColor = "#ffffff90";
export const toolbarBackColor = "#4A2E5B99";
export const whiteButtonTextColor = "#4A2E5B";
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
  backImage: {
    resizeMode: "cover",
    height: height,
    width: width,
    position: "absolute"
  },
  toolbar: {
    backgroundColor: toolbarBackColor,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "baseline"
  },
  toolbarText: {
    color: toolbarTextColor,
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center"
  },
  homeTextStyle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 20,
    color: "#8A77B4"
  },
  container: {
    flex: 1
  },
  leftAlign: {
    alignSelf: "flex-start",
    marginLeft: 8
  },
  button1: {
    borderRadius: 50,
    backgroundColor: white,
    paddingVertical: 15
  },
  button1text: {
    fontSize: 18,
    color: whiteButtonTextColor,
    textAlign: "center",
    fontWeight: "300"
  },
  button1accent: {
    borderRadius: 50,
    backgroundColor: "transparent",
    borderColor: white,
    borderWidth: 1,
    paddingVertical: 15
  },
  button1accenttext: {
    fontSize: 16,
    color: white,
    textAlign: "center",
    fontWeight: "300"
  },
  loginInput: {
    borderBottomColor: "#4A2E5B50",
    borderBottomWidth: 1.2,
    flex: 1,
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 22,
    fontWeight: "200"
  },
  dashboardCard: {
    width: width / 2.5,
    paddingVertical: 30,
    elevation: 2,
    shadowRadius: 2,
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
    fontWeight: "700",
    paddingVertical: 8
  }
});
