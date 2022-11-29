import React, { useEffect } from "react";
import dayjs from "dayjs";
import { View, ScrollView } from "react-native";
import { Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useConsultation } from "../../../hooks";
import { screen } from "../../../utils";
import { styles } from "./ConsultationInfoScreen.styles";

export function ConsultationInfoScreen(props) {
  const { route } = props;
  const navigation = useNavigation();
  const { params } = route;
  const { consultation, getConsultation } = useConsultation();

  useEffect(() => {
    getConsultation(params.id);
  }, []);

  const goToAR = () => {
    navigation.navigate(screen.ar.drawer, {
      screen: screen.ar.ar,
    });
  };

  if (!consultation)
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );

  if (!consultation.paciente_data) {
    <View>
      <Text h2>Sin información</Text>
    </View>;
  }

  return (
    <ScrollView>
      <View style={styles.content}>
        <View>
          <Text h2>CONSULTAS</Text>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Fecha de consulta</Text>
            <Text style={styles.displayInfo}>
              {dayjs(consultation.fecha).format("DD-MMM-YY [a las:] HH:mm")}
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Nombre Completo</Text>
            <Text style={styles.displayInfo}>
              {consultation?.paciente_data?.usuario_data?.persona_data?.nombre}{" "}
              {
                consultation?.paciente_data?.usuario_data?.persona_data
                  ?.apellido_paterno
              }{" "}
              {
                consultation?.paciente_data?.usuario_data?.persona_data
                  ?.apellido_materno
              }
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Descripción</Text>
            <Text style={styles.displayInfo}>{consultation.descripcion}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Diagnóstico</Text>
            <Text style={styles.displayInfo}>
              {consultation.enfermedad_data.nombre}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Button
          title="Realidad Aumentada"
          buttonStyle={styles.ARButton}
          onPress={goToAR}
        />
      </View>
    </ScrollView>
  );
}
