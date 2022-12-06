import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Icon, Text } from "@rneui/themed";
import { ListConsultationsPatient } from "../../../components/Patients/";
import { useAuth, useConsultation, usePatient } from "../../../hooks";
import { useIsFocused } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./PatientInfoScreen.styles";
import { ScrollView } from "react-native-gesture-handler";

export function PatientInfoScreen(props) {
  const isFocused = useIsFocused();
  const { navigation, route } = props;
  const { params } = route;
  const { consultations, getConsultationsByPatient, loading, error } =
    useConsultation();
  const { patient, getPatient } = usePatient();
  const { is_staff } = useAuth().auth.me;

  useEffect(() => {
    getPatient(params.id);
    getConsultationsByPatient(params.id);
  }, [isFocused]);

  const goToEditPatient = () => {
    navigation.navigate(screen.patient.addEditPatient, { patient });
  };

  const goToAddConsultation = () => {
    navigation.navigate(screen.patient.addEditConsultation, { patient });
  };

  const goToSearchConsultation = () => {
    navigation.navigate(screen.search.search, {
      type: "consultation",
    });
  };

  return (
    <ScrollView style={styles.content}>
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
            onPress={goToAddConsultation}
          />
          <Icon
            reverse
            type="material-community"
            name="pencil"
            color="#F6B014"
            containerStyle={styles.btnUpdate}
            onPress={goToEditPatient}
          />
        </>
      )}
      {/* <Icon
        reverse
        type="material-community"
        name="magnify"
        color="#001E4C"
        containerStyle={styles.btnSearch}
        onPress={goToSearchConsultation}
      /> */}
    </ScrollView>
  );
}
