import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ARScreen } from "../screens/AR";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function ARStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screen.ar.ar} component={ARScreen} />
    </Stack.Navigator>
  );
}
