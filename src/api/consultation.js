import { ENV } from "../utils";

export async function searchConsultationsByUserApi(id) {
  try {
    const search = `search=${id}`;
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CONSULTATIONS}/?${search}`;
    const params = {
      method: "GET",
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getConsultationsApi() {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CONSULTATIONS}/`;
    const params = {
      method: "GET",
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getConsultationsByPatientApi(idPatient) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CONSULTATIONS}/?paciente=${idPatient}`;
    const params = {
      method: "GET",
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getConsultationApi(id) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CONSULTATIONS}/${id}`;
    const params = {
      method: "GET",
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export async function updateImageConsultationApi(id, image, token) {
  try {
    console.log(image);
    const formData = new FormData();
    const imageType = image.substr(image.lastIndexOf(".") + 1);
    const nameFile = "foto_" + id + "." + imageType;
    formData.append("foto", {
      uri: image,
      type: `image/${imageType}`,
      name: nameFile,
    });

    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CONSULTATIONS}/${id}/`;
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

export async function addConsultationApi(formValue, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CONSULTATIONS}/`;
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
