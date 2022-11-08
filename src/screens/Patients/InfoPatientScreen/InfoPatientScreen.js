import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { ListPatients } from "../../../components/Patients/ListPatients/ListPatients";
import { useAuth, useConsultation } from "../../../hooks";
import { screen } from "../../../utils";
import { styles } from "./PatientsScreen.styles";

export function PatientsScreen(props) {
  const { navigation } = props;
  const { consultations, getConsultations, loading } = useConsultation();
  const { is_staff } = useAuth().auth.me;
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getConsultations();
  }, [refetch]);

  console.log(consultations);

  const goToAddPatient = () => {
    navigation.navigate(screen.patient.addPatient);
  };

  return (
    <View style={styles.content}>
      {!consultations ? (
        <Text>CARGANDO...</Text>
      ) : (
        <ListPatients patients={consultations} />
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
