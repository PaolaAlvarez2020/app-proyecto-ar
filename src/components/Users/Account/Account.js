import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Text, Button } from "@rneui/themed";
import { useAuth } from "../../../hooks";
import { styles } from "./Account.styles";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

export function Account(props) {
  const { me } = useAuth().auth;
  const navigation = useNavigation();
  const goToConsultations = (patient, person) => {
    const namePerson = `${person.nombre} ${person.apellido_paterno} ${person.apellido_materno}`;
    navigation.navigate(screen.patient.patientInfo, {
      id: patient?.id,
      name: namePerson,
    });
  };
  return (
    <ScrollView>
      <View style={styles.content}>
        <View>
          <Text h2>PERFIL DE USUARIO</Text>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Nombre de usuario</Text>
            <Text style={styles.displayInfo}>{me.username || "Anónimo"}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Nombre Completo</Text>
            <Text style={styles.displayInfo}>
              {me.persona_data?.nombre} {me.persona_data?.apellido_paterno}{" "}
              {me.persona_data?.apellido_materno}
            </Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Teléfono</Text>
            <Text style={styles.displayInfo}>{me.persona_data.telefono}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Carnet de Identidad</Text>
            <Text style={styles.displayInfo}>{me.persona_data.ci}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.titleDisplayInfo}>Rol</Text>
            <Text style={styles.displayInfo}>
              {me.is_staff ? "Doctor" : "Paciente"}
            </Text>
          </View>
          <Button
            title="Ver consultas"
            buttonStyle={styles.button}
            onPress={() => goToConsultations(null, me.persona_data)}
          />
        </View>
      </View>
    </ScrollView>
  );
}
