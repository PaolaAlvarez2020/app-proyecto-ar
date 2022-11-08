import { Platform } from "react-native";
import { ENV } from "../utils";

export async function loginApi(formValue) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.LOGIN}/`;

    const params = {
      method: "POST",
      headers: {
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

export async function getCurrentUserApi(token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.CURRENT_USER}/`;
    const params = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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
