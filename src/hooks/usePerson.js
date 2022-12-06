import { useState } from "react";
import {
  getPersonsApi,
  addPersonApi,
  updatePersonApi,
  deletePersonApi,
  updateAvatarPersonApi,
} from "../api/";
import { useAuth } from "./useAuth";

export function usePerson() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [persons, setPersons] = useState(null);
  const { auth } = useAuth();

  // const getPersons = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await getPersonsApi();
  //     setLoading(false);

  //     setPersons(response);
  //   } catch (err) {
  //     setError(err);
  //     setLoading(false);
  //   }
  // };

  const addPerson = async (data) => {
    try {
      setLoading(true);
      const response = await addPersonApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const updateAvatarPerson = async (id, ci, avatar) => {
    try {
      setLoading(true);
      const response = await updateAvatarPersonApi(id, ci, avatar, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const updatePerson = async (id, data) => {
    try {
      setLoading(true);
      const response = await updatePersonApi(id, data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const deletePerson = async (id) => {
    try {
      setLoading(true);
      const response = await deletePersonApi(id, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return {
    addPerson,
    updatePerson,
    updateAvatarPerson,
    deletePerson,
    loading,
    error,
    persons,
  };
}
