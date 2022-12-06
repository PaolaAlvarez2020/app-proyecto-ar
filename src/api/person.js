import { ENV } from "../utils";

export async function addPersonApi(formValue, token) {
  try {
    // const formData = new FormData();
    // const imageType = data.foto.substr(data.foto.lastIndexOf(".") + 1);
    // const nameFile = "foto_" + data.nombre + data.ci + "." + imageType;
    // formData.append("foto", {
    //   uri: data.foto,
    //   type: `image/${imageType}`,
    //   name: nameFile,
    // });

    // formData.append("ci", data.ci);
    // formData.append("nombre", data.nombre);
    // formData.append("apellido_paterno", data.apellido_paterno);
    // formData.append("apellido_materno", data.apellido_materno);
    // formData.append("telefono", data.telefono);
    // formData.append("direccion", data.direccion);
    // formData.append("genero", data.genero);
    // formData.append("fecha_nacimiento", data.fecha_nacimiento);
    // formData.append("ciudad", data.ciudad);

    // "Content-Type": "multipart/form-data",
    // console.log(config);
    // axios(config)
    //   .then((response) => {
    //     console.log("RESPONSE", response);
    //     console.log("JSON", JSON.stringify(response.data));
    //   })
    //   .catch((err) => {
    //     console.log("ERR AXIOS", err);
    //     console.log(err?.response?.data);
    //   });
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PERSONS}/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 201) throw result;

    return result;
  } catch (err) {
    console.log("ERR TRY CATCH", err);
    throw err;
  }
}

export async function updateAvatarPersonApi(id, ci, avatar, token) {
  try {
    const formData = new FormData();
    const imageType = avatar.substr(avatar.lastIndexOf(".") + 1);
    const nameFile = "foto_" + id + ci + "." + imageType;
    formData.append("foto", {
      uri: avatar,
      type: `image/${imageType}`,
      name: nameFile,
    });

    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PERSONS}/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;

    return result;
  } catch (err) {
    console.log("ERR TRY CATCH", err);
    throw err;
  }
}

export async function updatePersonApi(id, formValue, token) {
  delete formValue?.foto;
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PERSONS}/${id}/`;
    const params = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}

export async function deletePersonApi(id, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PERSONS}/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}
