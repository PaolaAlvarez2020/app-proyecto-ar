import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { SearchBar, ListItem, Avatar, Icon, Text } from "@rneui/themed";
import { size, map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";
import { usePatient } from "../../hooks";

export function SearchScreen(props) {
  const { params } = props.route;
  const { type } = params;
  const [searchText, setSearchText] = useState("");
  const { patients, searchPatients } = usePatient();
  const navigation = useNavigation();

  console.log(patients);

  useEffect(() => {
    (async () => {
      await searchPatients(searchText);
    })();
  }, [searchText]);

  const goToScreen = (patient, person) => {
    if (type === "patient") {
      const namePerson = `${person.nombre} ${person.apellido_paterno} ${person.apellido_materno}`;
      navigation.navigate(screen.patient.patientInfo, {
        id: patient.id,
        name: namePerson,
      });
    } else if (type === "consultation") {
      navigation.navigate(screen.patient.consultationInfo, {
        id: patient.id,
      });
    }
  };

  return (
    <>
      <SearchBar
        placeholder="Buscar"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {!patients && <Text>Cargando...</Text>}

      <ScrollView>
        {size(searchText) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>Puede buscar, por C.I. y por nombre del paciente</Text>
          </View>
        ) : size(patients) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>No se han encontrado resultados</Text>
          </View>
        ) : (
          map(patients, (item) => {
            const data = item;

            const person = data.usuario_data.persona_data;

            return (
              <ListItem
                key={data.id}
                bottomDivider
                onPress={() => goToScreen(data, person)}
              >
                <Avatar
                  source={
                    person?.foto
                      ? { uri: person.foto }
                      : require("../../../assets/img/default-paciente.png")
                  }
                  rounded
                />
                <ListItem.Content>
                  <ListItem.Title>
                    {person?.nombre} {person?.apellido_paterno}{" "}
                    {person?.apellido_materno}
                  </ListItem.Title>
                  <ListItem.Subtitle>{person?.ci}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon type="material-community" name="chevron-right" />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </>
  );
}
