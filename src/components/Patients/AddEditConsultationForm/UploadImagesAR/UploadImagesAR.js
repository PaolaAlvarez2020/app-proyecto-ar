import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Fragment,
} from "react";
import { ScrollView, View, Linking, Alert } from "react-native";
import { Button, Text, Image, Icon, Avatar } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import ViewShot, { captureRef } from "react-native-view-shot";
import { WebView } from "react-native-webview";
import { styles } from "./UploadImagesAR.styles";
import { AROptions } from "../../../AR/AROptions/AROptions";
import { filter, map } from "lodash";

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

export function UploadImagesAR(props) {
  const { formik } = props;
  const navigation = useNavigation();
  const ref = useRef();
  const [type2Dropdown, setType2Dropdown] = useState([]);
  const [image, setImage] = useState("");
  const [initWebView, setInitWebView] = useState(false);
  useEffect(() => {
    setTimeout(() => setInitWebView(true), 500);
  }, []);
  const onCapture = useCallback(() => {
    ref.current.capture().then((uri) => {
      formik.setFieldValue("foto", uri);
      setImage(uri);
    });
  }, []);

  const removeImage = () => {
    Alert.alert(
      "Eliminar imagen",
      "¿Estás segurdo de eliminar esta imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = "";
            formik.setFieldValue("foto", result);
            setImage(result);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Fragment>
      <View>
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
              formik.setFieldValue("enfermedad", item.value);
              formik.setFieldValue(
                "fecha",
                new Date(
                  new Date().toLocaleString("es-MX", {
                    timeZone: "America/La_Paz",
                  })
                )
              );
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
            onChange={(item) => {
              formik.setFieldValue("type2", item.value);
              formik.setFieldValue("subtipo", item.label);
            }}
          />
          <Text style={styles.error}>{formik.errors.type2}</Text>
        </View>
        <Text style={styles.title}>Agregar Imagen de Enfermedad</Text>
        <ViewShot ref={ref} styles={styles.content}>
          {initWebView && (
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
                        <h1>Para agregar una imagen debe, seleccionar el tipo de enfermedad, y una ves seleccionado debe presionar la parte donde esta el icono de camara para que se agregue</h1>
                        <h1>Escoga una opción de alguna enfermedad y aqui se mostrará la realidad aumentada</h1>
                    </body>
                    </html>`,
                    }
              }
            />
          )}
        </ViewShot>

        <ScrollView
          style={styles.viewImage}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Icon
            type="material-community"
            name="camera"
            color="#a7a7a7"
            containerStyle={styles.containerIcon}
            onPress={onCapture}
          />

          {image && (
            <Image
              source={{ uri: image }}
              containerStyle={styles.imageStyle}
              onPress={() => removeImage()}
            />
          )}
        </ScrollView>
        <Text style={styles.error}>{formik.errors.foto}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Button
          title="Observar AR"
          buttonStyle={styles.button}
          onPress={async () => await Linking.openURL(formik.values.type2)}
        />
      </ScrollView>
    </Fragment>
  );
}

// export function UploadImagesAR(props) {
//   return <AROptions />;
// }
