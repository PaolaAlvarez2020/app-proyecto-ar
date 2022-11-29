import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { ListConsultationsPatient } from "../../../components/Patients/";
import { useAuth, useConsultation } from "../../../hooks";
import { screen } from "../../../utils";
import { styles } from "./PatientInfoScreen.styles";

export function PatientInfoScreen(props) {
  const { navigation, route } = props;
  const { params } = route;
  const { consultations, getConsultationsByPatient, loading, error } =
    useConsultation();
  const { is_staff } = useAuth().auth.me;
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getConsultationsByPatient(params.id);
  }, [refetch]);

  return (
    <View style={styles.content}>
      {!consultations ? (
        <Text>CARGANDO...</Text>
      ) : (
        <>
          <View>
            <Text style={styles.title}>CONSULTAS</Text>
            <Text style={styles.subtitle}>{params.name.toUpperCase()}</Text>
          </View>
          <ListConsultationsPatient consultations={consultations} />
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
            // onPress={goToAddPatient}
          />
          <Icon
            reverse
            type="material-community"
            name="pencil"
            color="#F6B014"
            containerStyle={styles.btnUpdate}
            // onPress={goToAddPatient}
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
