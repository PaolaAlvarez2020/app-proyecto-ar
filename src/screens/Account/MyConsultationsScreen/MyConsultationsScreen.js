import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Icon, Text } from "@rneui/themed";
import { useAuth, useConsultation } from "../../../hooks";
import { ListMyConsultations } from "../../../components/Consultations";
import { useIsFocused } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./MyConsultationsScreen.styles";

export function MyConsultationsScreen() {
  const isFocused = useIsFocused();
  const { searchConsultationsByUser, consultations } = useConsultation();
  const { id } = useAuth().auth.me;

  console.log(consultations);
  useEffect(() => {
    searchConsultationsByUser(id);
  }, [isFocused]);

  return (
    <View style={styles.content}>
      {!consultations ? (
        <Text>CARGANDO...</Text>
      ) : (
        <>
          <Text style={styles.title}>MIS CONSULTAS</Text>
          <ListMyConsultations consultations={consultations} />
        </>
      )}
    </View>
  );
}
