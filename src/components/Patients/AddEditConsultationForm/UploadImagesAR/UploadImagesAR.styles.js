import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  webview: {
    position: "relative",
    height: 400,
    width: "90%",
    marginHorizontal: 20,
  },
  image: {
    width: Dimensions.get("window").width,
    height: 100,
    marginHorizontal: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#001E4C",
    margin: 20,
  },
  content: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    marginHorizontal: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  containerDropdown: {
    marginVertical: 0,
    marginHorizontal: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "#001E4C",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  error: {
    marginHorizontal: 20,
    marginTop: 10,
    color: "#ff0000",
    fontSize: 12,
    paddingLeft: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8E8E8E",
    marginBottom: 10,
  },
  viewImage: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
  },
  containerIcon: {
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#e3e3e3",
    width: 70,
    height: 70,
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});
