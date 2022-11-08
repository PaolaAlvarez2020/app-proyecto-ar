import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { useAuth } from "../../../hooks";
import { styles } from "./Account.styles";

export function Account() {
  const { me } = useAuth().auth;
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
        </View>
      </View>
    </ScrollView>
  );
}
