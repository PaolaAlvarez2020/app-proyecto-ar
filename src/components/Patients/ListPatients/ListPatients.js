import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { calcularEdad, screen } from "../../../utils";
import { styles } from "./ListPatients.styles";

export function ListPatients(props) {
  const { patients } = props;
  const navigation = useNavigation();

  const goToPatient = (patient, person) => {
    const namePerson = `${person.nombre} ${person.apellido_paterno} ${person.apellido_materno}`;
    navigation.navigate(screen.patient.patientInfo, {
      id: patient.id,
      name: namePerson,
    });
  };

  return (
    <FlatList
      data={patients}
      renderItem={(doc) => {
        // console.log("doc", doc);
        const patient = doc.item;
        const personData = patient?.usuario_data?.persona_data;

        return (
          <TouchableOpacity onPress={() => goToPatient(patient, personData)}>
            <View style={styles.patient}>
              <Image
                source={
                  personData?.foto
                    ? { uri: personData?.foto }
                    : require("../../../../assets/img/default-paciente.png")
                }
                style={styles.image}
              />

              <View>
                <Text style={styles.name}>
                  {personData?.nombre} {personData?.apellido_paterno}{" "}
                  {personData?.apellido_materno}
                </Text>
                <Text style={styles.info}>C.I: {personData?.ci}</Text>
                <Text style={styles.info}>{personData?.ciudad}</Text>
                <Text style={styles.info}>
                  {calcularEdad(personData?.fecha_nacimiento)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
