import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  Fragment,
} from "react";
import { ScrollView, View, Linking } from "react-native";
import { Button, Text, Image } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import ViewShot, { captureRef } from "react-native-view-shot";
import { PermissionsAndroid } from "react-native";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { initialVales, validationSchema } from "./AROptions.data";
import { WebView } from "react-native-webview";
import { styles } from "./AROptions.styles";
const dimension = { width: 300, height: 300 };

const type1 = [
  { label: "Disfonia Funcional", value: "disfonia" },
  { label: "Parálisis faringo laringea", value: "laringea" },
  { label: "Cáncer en la laringe", value: "cancer" },
];

const typeLaringea = [
  {
    label: "Parálisis bilateral parcial SDR Gerhardt",
    value: "https://deeply-foamy-beetle.glitch.me",
  },
  {
    label: "Parálisis abducción SDR Ziemsen",
    value: "https://remarkable-violet-saxophone.glitch.me",
  },
  {
    label: "Parálisis bilateral nervios laringeos superiores",
    value: "https://branch-olive-serpent.glitch.me",
  },
  {
    label: "Parálisis bilateral total Riegel",
    value: "https://lying-flying-midnight.glitch.me",
  },
];

const typeDisfonia = [
  {
    label: "Disfonia funcional 1",
    value: "https://alluring-incredible-bambiraptor.glitch.me",
  },
  { label: "Nodulos Vocales", value: "nodulos" },
  {
    label: "Polipos",
    value: "polipos",
  },
  {
    label: "Edema de Reincke",
    value: "https://hissing-fixed-pulsar.glitch.me",
  },
  { label: "Hemorragia Subepitelial", value: "hemorragia" },
];

const typeCancer = [
  {
    label: "Cancer en la laringe",
    value: "https://fuchsia-groovy-chef.glitch.me",
  },
  { label: "Cancer en la laringe por fumar", value: "fumar" },
  {
    label: "Cancer de laringe por alcohol",
    value: "https://lovely-marble-euphonium.glitch.me",
  },
];

function useCapture() {
  const captureViewRef = useRef();

  function onCapture() {
    captureRef(captureViewRef, {
      format: "jpg",
      quality: 0.9,
    }).then(
      (uri) => alert(uri),
      (error) => alert("Oops, snapshot failed", error)
    );
  }

  return {
    captureViewRef,
    onCapture,
  };
}

export function AROptions() {
  const navigation = useNavigation();
  const [type2Dropdown, setType2Dropdown] = useState([]);
  const [uriWebView, setUriWebView] = useState("");
  const [source, setSource] = useState(null);
  const { captureViewRef, onCapture } = useCapture();
  // const onCapture = useCallback(() => {
  //   full.current.capture().then((uri) => setPreview({ uri }));
  // }, []);

  // const onCapture = () => {
  //   captureRef(viewRef, {
  //     format: "jpg",
  //     quality: 0.9,
  //   }).then(
  //     (uri) => {
  //       console.log("Image saved to", uri);
  //       setUriWebView(uri);
  //     },
  //     (error) => console.error("Oops, snapshot failed", error)
  //   );
  //   // ref.current.capture().then((uri) => {});
  // };

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await Linking.openURL(formValue.type2);
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "REALIDAD AUMENTADA EN ACCIÓN",
        });
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
    <Fragment>
      <View>
        <Text style={styles.title}>VISOR DE REALIDAD AUMENTADA</Text>
        <Button
          title="Sacar captura"
          buttonStyle={styles.button}
          onPress={onCapture}
        />
        <ViewShot style={dimension} ref={captureViewRef}>
          <WebView
            style={styles.webview}
            source={
              formik.values.type2
                ? { uri: formik.values.type2 }
                : {
                    html: `
                    <html>
                    <head>
                        <title>Text alignment</title>
                        <style>
                            h1{text-align: center;}
                        </style>
                    </head>
                    <body>
                        <h1>Escoga una opción de alguna enfermedad y aqui se mostrará la realidad aumentada</h1>
                    </body>
                    </html>`,
                  }
            }
          />
        </ViewShot>

        <Image fadeDuration={0} source={source} style={dimension} />
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.containerDropdown}>
          <Text style={styles.label}>Enfermedades</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.textDropdownStyle}
            data={type1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Selecciona un tipo de enfermedad"
            searchPlaceholder="Buscar..."
            value={formik.values.type1}
            onChange={(item) => {
              if (item.value === "disfonia") {
                setType2Dropdown(typeDisfonia);
              }
              if (item.value === "laringea") {
                setType2Dropdown(typeLaringea);
              }
              if (item.value === "cancer") {
                setType2Dropdown(typeCancer);
              }
              formik.setFieldValue("type1", item.value);
            }}
          />
          <Text style={styles.error}>{formik.errors.type1}</Text>
        </View>
        <View style={styles.containerDropdown}>
          <Text style={styles.label}>Subtipos</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            itemTextStyle={styles.textDropdownStyle}
            data={type2Dropdown}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Selecciona una enfermedad"
            searchPlaceholder="Buscar..."
            value={formik.values.type2}
            onChange={(item) => formik.setFieldValue("type2", item.value)}
          />
          <Text style={styles.error}>{formik.errors.type2}</Text>
        </View>
        <Button
          title="Observar AR"
          buttonStyle={styles.button}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </ScrollView>
    </Fragment>
  );
}
