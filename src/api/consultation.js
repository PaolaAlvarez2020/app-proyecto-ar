import { ENV } from "../utils";

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
