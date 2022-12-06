import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  MyConsultationsScreen,
  MyConsultationScreen,
} from "../screens/Account";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screen.account.account} component={AccountScreen} />
      <Stack.Screen
        name={screen.consultation.myConsultations}
        component={MyConsultationsScreen}
      />
      <Stack.Screen
        name={screen.consultation.myConsultation}
        component={MyConsultationScreen}
      />
    </Stack.Navigator>
  );
}
