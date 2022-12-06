import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  addButton: {
    backgroundColor: "#001E4C",
    width: "80%",
  },
  cancelButton: {
    backgroundColor: "#EB0100",
    width: "80%",
  },
});
