import { ENV } from "../utils";

export async function getPatientsApi() {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PATIENTS}/`;
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

export async function getPatientApi(id) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PATIENTS}/${id}/`;
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

export async function searchPatientsApi(text) {
  try {
    const search = `search=${text}`;
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PATIENTS}/?${search}`;
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

export async function addPatientApi(formValue, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PATIENTS}/`;
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

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}

export async function updatePatientApi(id, formValue, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PATIENTS}/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };

    const response = await fetch(url, params);
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) throw result;
    return result;
  } catch (err) {
    throw err;
  }
}

export async function deletePatientApi(id, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PATIENTS}/${id}/`;
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
