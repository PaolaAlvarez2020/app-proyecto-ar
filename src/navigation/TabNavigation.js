import react, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icon } from "@rneui/themed";
import { AccountStack } from "./AccountStack";
import { PatientStack } from "./PatientStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#001E4C",
        tabBarInactiveTintColor: "#5B94B1",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "AccountTab") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "PatientTab") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name={screen.patient.tab}
        component={PatientStack}
        options={{ title: "Pacientes" }}
      />
    </Tab.Navigator>
  );
}
