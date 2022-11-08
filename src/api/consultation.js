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
