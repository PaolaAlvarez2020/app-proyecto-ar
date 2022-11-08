import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PatientsScreen } from "../screens/Patients";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function PatientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.patient.patient}
        component={PatientsScreen}
        options={{ title: "Pacientes" }}
      />
      <Stack.Screen
        name={screen.patient.patientInfo}
        component={PatientsScreen}
        options={{ title: "Información" }}
      />
    </Stack.Navigator>
  );
}
