import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENV } from "../utils";

async function saveToken(access) {
  await AsyncStorage.setItem(ENV.JWT.ACCESS, access);
}

async function getToken() {
  const access = await AsyncStorage.getItem(ENV.JWT.ACCESS);

  return {
    access,
  };
}

async function removeToken() {
  await AsyncStorage.removeItem(ENV.JWT.ACCESS);
}

export const tokenObject = {
  saveToken,
  getToken,
  removeToken,
};
