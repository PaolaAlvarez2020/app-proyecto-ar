import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigation } from "./DrawerNavigation";
import { screen } from "../utils";
import { AuthScreen, LoginScreen } from "../screens/Auth";
import { useAuth } from "../hooks";
import { tokenObject } from "../api";
import { isUndefined } from "lodash";

const Stack = createNativeStackNavigator();

export function AuthNavigation() {
  const { auth, isLoading } = useAuth();
  if (isLoading) {
    return null;
  }
  return (
    <Stack.Navigator>
      {isUndefined(auth?.me) ? (
        <Stack.Screen
          name={screen.auth.login}
          component={LoginScreen}
          options={{ title: "Inicio de Sesión" }}
        />
      ) : (
        <Stack.Screen
          name={screen.auth.app}
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}
