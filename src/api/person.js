import { ENV } from "../utils";

export async function addPersonApi(data, token) {
  try {
    const formData = new FormData();
    if (data.foto) {
      const imageType = data.foto.substr(data.foto.lastIndexOf(".") + 1);
      const nameFile = "foto_" + data.nombre + data.ci + "." + imageType;
      formData.append("foto", data.foto, nameFile);
    }
    formData.append("ci", data.ci);
    formData.append("nombre", data.nombre);
    formData.append("apellido_paterno", data.apellido_paterno);
    formData.append("apellido_materno", data.apellido_materno);
    formData.append("telefono", data.telefono);
    formData.append("direccion", data.direccion);
    formData.append("genero", data.genero);
    formData.append("fecha_nacimiento", data.fecha_nacimiento);
    formData.append("ciudad", data.ciudad);

    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PERSONS}/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const response = await fetch(url, params);
    const result = await response.json();
    console.log("RESPONSE", response, "TOKEN", token, "RESULT", result);
    console.log("RESPONSE", response, "TOKEN", token, "RESULT", result);

    if (response.status !== 200 && response.status !== 201) throw result;

    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updatePersonApi(id, data, token) {
  const formData = new FormData();
  if (data.foto) {
    formData.append("foto", data.foto);
  }
  formData.append("ci", data.ci);
  formData.append("nombre", data.nombre);
  formData.append("apellido_paterno", data.apellido_paterno);
  formData.append("apellido_materno", data.apellido_materno);
  formData.append("telefono", data.telefono);
  formData.append("direccion", data.direccion);
  formData.append("genero", data.genero);
  formData.append("fecha_nacimiento", data.fecha_nacimiento);
  formData.append("ciudad", data.ciudad);

  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PERSONS}/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
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
