import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { ListPatients } from "../../../components/Patients";
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

  const goToAddEditPatient = () => {
    navigation.navigate(screen.patient.addEditPatient);
  };

  return (
    <View style={styles.content}>
      {!patients ? (
        <Text>CARGANDO...</Text>
      ) : (
        <>
          <Text style={styles.title}>LISTA DE PACIENTES</Text>
          <ListPatients patients={patients} />
        </>
      )}

      {is_staff && (
        <>
          <Icon
            reverse
            type="material-community"
            name="plus"
            color="#00A84C"
            containerStyle={styles.btnAdd}
            onPress={goToAddEditPatient}
          />
        </>
      )}
      <Icon
        reverse
        type="material-community"
        name="magnify"
        color="#001E4C"
        containerStyle={styles.btnSearch}
        // onPress={goToAddPatient}
      />
    </View>
  );
}
