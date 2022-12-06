import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { Icon, Avatar, Text } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./UploadImagePatientForm.styles";

export function UploadImagePatientForm(props) {
  const { formik } = props;
  const [image, setImage] = useState(formik.values?.foto || null);

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      formik.setFieldValue("foto", result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <ScrollView style={styles.viewImage}>
        <Avatar
          source={
            image
              ? { uri: image }
              : require("../../../../../assets/img/default-paciente.png")
          }
          containerStyle={styles.imageStyle}
        >
          <Avatar.Accessory
            size={24}
            iconStyle={styles.containerIcon}
            onPress={openGallery}
          />
        </Avatar>
      </ScrollView>
      <Text style={styles.error}>{formik.errors.foto}</Text>
    </>
  );
}
