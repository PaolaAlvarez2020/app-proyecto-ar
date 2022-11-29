import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";
import { LoginForm } from "../../../components/Auth";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/proyecto-ar-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.textRegister}></Text>
      </View>
    </ScrollView>
  );
}
