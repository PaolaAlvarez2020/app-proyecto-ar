import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigation } from "./DrawerNavigation";
import { screen } from "../utils";
import { AuthScreen, LoginScreen } from "../screens/Auth";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.auth.auth}
        component={AuthScreen}
        options={{ title: "Inicio de Sesión" }}
      />
      <Stack.Screen
        name={screen.auth.login}
        component={LoginScreen}
        options={{ title: "Inicio de Sesión" }}
      />
      <Stack.Screen
        name={screen.auth.app}
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
