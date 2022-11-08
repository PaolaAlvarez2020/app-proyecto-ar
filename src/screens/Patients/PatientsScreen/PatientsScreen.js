import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ListPatients } from "../../../components/Patients/ListPatients/ListPatients";
import { useAuth, usePatient } from "../../../hooks";
import { screen } from "../../../utils";
import { styles } from "./PatientsScreen.styles";

export function PatientsScreen(props) {
  const { navigation } = props;
  const { patients, getPatients, loading } = usePatient();
  const { is_staff } = useAuth().auth.me;
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getPatients();
  }, [refetch]);

  console.log(patients);

  const goToAddPatient = () => {
    navigation.navigate(screen.patient.addPatient);
  };

  return (
    <View style={styles.content}>
      {!patients ? (
        <Text>CARGANDO...</Text>
      ) : (
        <ListPatients patients={patients} />
      )}

      {is_staff && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={goToAddPatient}
        />
      )}
    </View>
  );
}
