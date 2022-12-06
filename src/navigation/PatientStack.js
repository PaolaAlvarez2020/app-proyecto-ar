import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PatientsScreen,
  PatientInfoScreen,
  AddEditPatientScreen,
} from "../screens/Patients";
import {
  ConsultationInfoScreen,
  AddEditConsultationScreen,
} from "../screens/Consultations";
import { SearchScreen } from "../screens/SearchScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function PatientStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screen.patient.patient} component={PatientsScreen} />
      <Stack.Screen
        name={screen.patient.patientInfo}
        component={PatientInfoScreen}
      />
      <Stack.Screen
        name={screen.patient.addEditPatient}
        component={AddEditPatientScreen}
      />
      <Stack.Screen
        name={screen.patient.consultationInfo}
        component={ConsultationInfoScreen}
      />
      <Stack.Screen
        name={screen.patient.addEditConsultation}
        component={AddEditConsultationScreen}
      />
      <Stack.Screen name={screen.search.search} component={SearchScreen} />
    </Stack.Navigator>
  );
}
