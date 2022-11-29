import React, { useState } from "react";
import { Icon, Button, Text } from "react-native-elements";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { AccountStack } from "./AccountStack";
import { PatientStack } from "./PatientStack";
import { ARStack } from "./ARStack";
import { screen } from "../utils";
import { useAuth } from "../hooks";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  const { auth, logout } = useAuth();

  return (
    <Drawer.Navigator
      initialRouteName={screen.account.drawer}
      screenOptions={({ route }) => ({
        drawerActiveTintColor: "#001E4C",
        drawerInactiveTintColor: "#5B94B1",
        drawerIcon: ({ focused, color, size }) =>
          iconOptions(route, focused, color, size),
        headerRight: () => (
          <Button
            onPress={logout}
            buttonStyle={{
              backgroundColor: "#001E4C",
              marginRight: 10,
              borderRadius: 100,
            }}
            icon={{
              type: "material-community",
              name: "power",
              size: 24,
              color: "#fff",
            }}
          />
        ),
      })}
    >
      <Drawer.Screen
        name={screen.account.drawer}
        component={AccountStack}
        options={{ title: screen.account.title }}
      />
      {auth.me.is_staff && (
        <Drawer.Screen
          name={screen.patient.drawer}
          component={PatientStack}
          options={{ title: screen.patient.title }}
        />
      )}
      <Drawer.Screen
        name={screen.ar.drawer}
        component={ARStack}
        options={{ title: screen.ar.title }}
      />
    </Drawer.Navigator>
  );
}

function iconOptions(route, focused, color, size) {
  let iconName;

  if (route.name === screen.account.drawer) {
    iconName = focused ? "account-circle" : "account-circle-outline";
  } else if (route.name === screen.patient.drawer) {
    iconName = focused ? "heart" : "heart-outline";
  } else if (route.name === screen.ar.drawer) {
    iconName = focused ? "cube-scan" : "cube-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
  // return <Ionicons name={iconName} size={size} color={color} />;
}
