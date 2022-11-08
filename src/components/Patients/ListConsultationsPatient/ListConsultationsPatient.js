import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListConsultations.styles";

export function ListConsultations(props) {
  const { consultations } = props;
  const navigation = useNavigation();

  const goToConsultation = (consultation) => {
    const nameConsultation = `${consultation.nombre} ${consultation.apellido_paterno} ${consultation.apellido_materno}`;
    navigation.setOptions({
      title: nameConsultation,
    });
    navigation.navigate(screen.consultation.consultationInfo, {
      id: consultation.id,
    });
  };

  return (
    <FlatList
      data={consultations}
      renderItem={(doc) => {
        console.log(doc);
        const consultation = doc.item;
        const consultationData = consultation?.usuario_data?.persona_data;

        return (
          <TouchableOpacity onPress={() => goToConsultation(consultationData)}>
            <View style={styles.consultation}>
              <Image
                source={require("../../../../assets/img/proyecto-ar-logo.png")}
                style={styles.image}
              />

              <View>
                <Text style={styles.name}>{consultationData.nombre}</Text>
                <Text style={styles.info}>{consultationData.ci}</Text>
                <Text style={styles.info}>{consultationData.ciudad}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
