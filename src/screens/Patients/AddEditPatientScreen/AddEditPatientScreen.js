import React from "react";
import { ScrollView } from "react-native";
import { Button, Text } from "react-native-elements";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  UploadImagePatientForm,
  InfoPatientForm,
} from "../../../components/Patients/AddEditPatientForm";
import { initialVales, addValidationSchema } from "./AddEditPatientScreen.data";
import { styles } from "./AddEditPatientScreen.styles";
import { usePerson, usePatient, useUser } from "../../../hooks/";

export function AddEditPatientScreen() {
  const navigation = useNavigation();
  const { addPerson } = usePerson();
  const { addPatient } = usePatient();
  const { addUser } = useUser();

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: addValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        console.log("formValue", formValue);
        const responsePerson = await addPerson(formValue);
        console.log(responsePerson);
        // await addPerson(formValue)
        //   .then(async (responsePerson) => {
        //     console.log("responsePerson", responsePerson);
        //     // await addUser({
        //     //   ci: formValue.ci,
        //     //   username: formValue.nombre?.substring(
        //     //     0,
        //     //     formValue.nombre?.indexOf(" ")
        //     //   ),
        //     //   email: formValue.email,
        //     //   persona: responsePerson.id,
        //     //   password: formValue.ci,
        //     //   is_active: true,
        //     //   is_staff: false,
        //     // })
        //     //   .then(async (responseUser) => {
        //     //     console.log("responseUser", responseUser);
        //     //     await addPatient({
        //     //       favorito: false,
        //     //       estado: true,
        //     //       usuario: responseUser.id,
        //     //     });
        //     //   })
        //     //   .catch((err) => {
        //     //     Toast.show({
        //     //       type: "error",
        //     //       position: "bottom",
        //     //       text1: "Error al añadir",
        //     //       text2: err?.message,
        //     //     });
        //     //   });
        //   })
        //   .catch((err) => {
        //     console.log("err", err);
        //     Toast.show({
        //       type: "error",
        //       position: "bottom",
        //       text1: "Error al añadir",
        //       text2: err?.message,
        //     });
        //   });
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Paciente creado correctamente",
        });

        navigation.goBack();
      } catch (error) {
        console.log("error", error);
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al añadir",
          text2: error?.message,
        });
      }
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <Text style={styles.title}>AGREGAR PACIENTE</Text>
      <UploadImagePatientForm formik={formik} />
      <InfoPatientForm formik={formik} />

      <Button
        title="Agregar"
        buttonStyle={styles.addButton}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
