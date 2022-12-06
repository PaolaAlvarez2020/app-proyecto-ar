import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { styles } from "./InfoConsultationForm.styles";
import dayjs from "dayjs";
require("dayjs/locale/es");

export function InfoConsultationForm(props) {
  const { formik } = props;

  return (
    <>
      <View style={styles.content}>
        <Text style={styles.label}>Fecha de Consulta:</Text>
        <Text style={styles.created_at}>
          {dayjs(
            new Date().toLocaleString("es-MX", { timeZone: "America/La_Paz" })
          )
            .locale("es-MX")
            .format("DD [de] MMMM [del] YYYY [con] HH:mm")}
        </Text>
        <Input
          placeholder="Descripción de la consulta"
          label="Descripción de la consulta"
          multiline={true}
          keyboardType="default"
          inputContainerStyle={styles.textArea}
          defaultValue={formik.values.descripcion}
          onChangeText={(text) => formik.setFieldValue("descripcion", text)}
          errorMessage={formik.errors.descripcion}
        />
      </View>
    </>
  );
}
