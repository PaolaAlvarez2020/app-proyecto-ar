import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text, Button } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./InfoPatientForm.styles";
import dayjs from "dayjs";
require("dayjs/locale/es");

const genres = [
  { label: "Masculino", value: "MALE" },
  { label: "Femenino", value: "FEMALE" },
  { label: "Sin asignar", value: "UNDEFINED" },
  { label: "Otro", value: "OTHER" },
];

export function InfoPatientForm(props) {
  const { formik } = props;
  const [showDatepicker, setShowDatepicker] = useState(false);

  const onChangeDatepicker = (event, selectedDate) => {
    formik.setFieldValue("fecha_nacimiento", selectedDate);
    setShowDatepicker(false);
  };

  const onShowDatepicker = () => {
    setShowDatepicker(true);
  };

  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Carnet de Identidad"
          label="Carnet de Identidad"
          keyboardType="number-pad"
          defaultValue={formik.values.ci}
          onChangeText={(text) => formik.setFieldValue("ci", text)}
          errorMessage={formik.errors.ci}
        />
        <Input
          placeholder="Nombre"
          label="Nombre"
          keyboardType="name-phone-pad"
          defaultValue={formik.values.nombre}
          onChangeText={(text) => formik.setFieldValue("nombre", text)}
          errorMessage={formik.errors.nombre}
        />
        <Input
          placeholder="Apellido Paterno"
          label="Apellido Paterno"
          keyboardType="name-phone-pad"
          defaultValue={formik.values.apellido_paterno}
          onChangeText={(text) =>
            formik.setFieldValue("apellido_paterno", text)
          }
          errorMessage={formik.errors.apellido_paterno}
        />
        <Input
          placeholder="Apellido Materno"
          label="Apellido Materno"
          keyboardType="name-phone-pad"
          defaultValue={formik.values.apellido_materno}
          onChangeText={(text) =>
            formik.setFieldValue("apellido_materno", text)
          }
          errorMessage={formik.errors.apellido_materno}
        />
        <Input
          placeholder="Teléfono"
          label="Teléfono"
          keyboardType="number-pad"
          defaultValue={formik.values.telefono}
          onChangeText={(text) => formik.setFieldValue("telefono", text)}
          errorMessage={formik.errors.telefono}
        />
        <Input
          placeholder="Correo Electrónico"
          label="Correo Electrónico"
          keyboardType="email-address"
          defaultValue={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Dirección"
          label="Dirección"
          multiline={true}
          keyboardType="default"
          inputContainerStyle={styles.textArea}
          defaultValue={formik.values.direccion}
          onChangeText={(text) => formik.setFieldValue("direccion", text)}
          errorMessage={formik.errors.direccion}
        />
        <View style={styles.containerDropdown}>
          <Text style={styles.label}>Género</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.textDropdownStyle}
            data={genres}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Selecciona un género"
            searchPlaceholder="Buscar..."
            value={formik.values.genero}
            onChange={(item) => formik.setFieldValue("genero", item.value)}
          />
          <Text style={styles.error}>{formik.errors.genero}</Text>
        </View>
        <View style={styles.containerDatepicker}>
          <Text style={styles.label}>Fecha de nacimiento</Text>
          <View style={styles.datepicker}>
            <Text style={styles.inputDatepicker}>
              {formik.values.fecha_nacimiento
                ? dayjs(formik.values.fecha_nacimiento)
                    .locale("es")
                    .format("DD [de] MMMM [del] YYYY")
                : "Seleccionar fecha de nacimiento"}
            </Text>
            <Button
              buttonStyle={styles.buttonDatepicker}
              onPress={onShowDatepicker}
              icon={{
                name: "calendar",
                type: "material-community",
                color: "#fff",
              }}
            />
            {showDatepicker && (
              <DateTimePicker
                testID="dateTimePicker"
                mode="date"
                maximumDate={new Date()}
                minimumDate={new Date(1950, 0, 1)}
                value={
                  formik.values.fecha_nacimiento
                    ? new Date(formik.values.fecha_nacimiento)
                    : new Date()
                }
                onChange={onChangeDatepicker}
              />
            )}
          </View>
          <Text style={styles.error}>{formik.errors.fecha_nacimiento}</Text>
        </View>
        <Input
          placeholder="Ciudad"
          keyboardType="default"
          label="Ciudad"
          defaultValue={formik.values.ciudad}
          onChangeText={(text) => formik.setFieldValue("ciudad", text)}
          errorMessage={formik.errors.ciudad}
        />
      </View>
    </>
  );
}

const getColorIconMap = (formik) => {
  if (formik.errors.location) return "#ff0000";

  if (formik.values.location) return "#00a680";

  return "#c2c2c2";
};
