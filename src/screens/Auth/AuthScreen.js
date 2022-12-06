import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";
import { useAuth } from "../../hooks";
import { Text } from "@rneui/themed";

export function AuthScreen(props) {
  const { auth } = useAuth();

  //   console.log("AUTH NAVIGATION", auth);
  const { navigation } = props;
  const goToLogin = () => {
    navigation.navigate(screen.auth.login);
  };

  const goToApp = () => {
    navigation.navigate(screen.auth.app);
  };
  if (!auth?.me) goToLogin();
  else goToApp();
  return <Text>Error</Text>;
}
