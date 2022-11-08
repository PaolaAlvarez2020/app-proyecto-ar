import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigation } from "./TabNavigation";
import { screen } from "../utils";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={screen.account.drawer}
      screenOptions={{
        title: "Proyecto-AR",
      }}
    >
      <Drawer.Screen name={screen.account.drawer} component={TabNavigation} />
    </Drawer.Navigator>
  );
}
