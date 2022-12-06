import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListConsultationsPatient.styles";
import dayjs from "dayjs";
import { size } from "lodash";
require("dayjs/locale/es");

export function ListConsultationsPatient(props) {
  const { consultations } = props;
  const navigation = useNavigation();

  const goToConsultation = (consultation) => {
    const nameConsultation = `${consultation.nombre} ${consultation.apellido_paterno} ${consultation.apellido_materno}`;
    navigation.setOptions({
      title: nameConsultation,
    });
    navigation.navigate(screen.patient.consultationInfo, {
      id: consultation.id,
    });
  };

  return (
    <FlatList
      data={consultations}
      renderItem={(doc) => {
        // console.log("consultation", doc);
        const consultation = doc.item;
        const diseaseData = consultation?.enfermedad_data;

        return (
          <TouchableOpacity onPress={() => goToConsultation(diseaseData)}>
            <View style={styles.consultation}>
              <Image
                source={
                  consultation?.foto
                    ? { uri: consultation.foto }
                    : require("../../../../assets/img/consulta.png")
                }
                style={styles.image}
              />

              <View>
                <Text style={styles.dateConsultation}>
                  {dayjs(consultation.fecha).format(
                    "[Fecha: ] DD-MMM-YY [a las: ] HH:mm"
                  )}
                </Text>
                <Text style={styles.info}>
                  Enfermedad:{" "}
                  {size(diseaseData?.nombre) > 30
                    ? diseaseData?.nombre?.substring(0, 30) + "..."
                    : diseaseData?.nombre}
                </Text>
                <Text style={styles.info}>
                  Descripción:{" "}
                  {size(consultation?.descripcion) > 30
                    ? consultation?.descripcion?.substring(0, 30) + "..."
                    : consultation?.descripcion}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
