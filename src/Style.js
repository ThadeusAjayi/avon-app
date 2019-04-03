import { StyleSheet } from "react-native";

export const colorPrimary = "#650092";
export const white = "#ffffff";

export default StyleSheet.create({
  init: {
    flex: 1,
    paddingHorizontal: 20,
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
  }
});
