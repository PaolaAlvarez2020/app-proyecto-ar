import { useState } from "react";
import {
  getPatientsApi,
  addPatientApi,
  updatePatientApi,
  deletePatientApi,
} from "../api/";
import { useAuth } from "./useAuth";

export function usePatient() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [patients, setPatients] = useState(null);
  const { auth } = useAuth();

  const getPatients = async () => {
    try {
      setLoading(true);
      const response = await getPatientsApi();
      setLoading(false);

      setPatients(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addPatient = async (data) => {
    try {
      setLoading(true);
      const response = await addPatientApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const updatePatient = async (id, data) => {
    try {
      setLoading(true);
      const response = await updatePatientApi(id, data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const deletePatient = async (id) => {
    try {
      setLoading(true);
      const response = await deletePatientApi(id, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return {
    getPatients,
    addPatient,
    updatePatient,
    deletePatient,
    loading,
    error,
    patients,
  };
}
