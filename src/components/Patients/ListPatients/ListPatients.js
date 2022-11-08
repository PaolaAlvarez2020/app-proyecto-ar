import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListPatients.styles";

export function ListPatients(props) {
  const { patients } = props;
  const navigation = useNavigation();

  const goToPatient = (patient) => {
    const namePatient = `${patient.nombre} ${patient.apellido_paterno} ${patient.apellido_materno}`;
    navigation.setOptions({
      title: namePatient,
    });
    navigation.navigate(screen.patient.patientInfo, { id: patient.id });
  };

  return (
    <FlatList
      data={patients}
      renderItem={(doc) => {
        console.log(doc);
        const patient = doc.item;
        const patientData = patient?.usuario_data?.persona_data;

        return (
          <TouchableOpacity onPress={() => goToPatient(patientData)}>
            <View style={styles.patient}>
              <Image
                source={require("../../../../assets/img/proyecto-ar-logo.png")}
                style={styles.image}
              />

              <View>
                <Text style={styles.name}>{patientData.nombre}</Text>
                <Text style={styles.info}>{patientData.ci}</Text>
                <Text style={styles.info}>{patientData.ciudad}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
