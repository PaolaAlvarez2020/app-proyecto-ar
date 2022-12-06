import { LogBox } from "react-native";
import { AuthProvider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { AuthNavigation } from "./src/navigation/AuthNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-get-random-values";
import "react-native-gesture-handler";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
      <Toast />
    </AuthProvider>
  );
}
