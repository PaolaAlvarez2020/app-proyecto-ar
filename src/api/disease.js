import { ENV } from "../utils";

export async function addDiseaseApi(formValue, token) {
  try {
    const url = `${ENV.BASE_API}/${ENV.API_ROUTES.DISEASES}/`;
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
