import { useState } from "react";
import {
  getPatientsApi,
  getPatientApi,
  addPatientApi,
  updatePatientApi,
  deletePatientApi,
  searchPatientsApi,
} from "../api/";
import { useAuth } from "./useAuth";

export function usePatient() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [patients, setPatients] = useState(null);
  const [patient, setPatient] = useState(null);
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

  const getPatient = async (id) => {
    try {
      setLoading(true);
      const response = await getPatientApi(id);
      setLoading(false);

      setPatient(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const searchPatients = async (text) => {
    try {
      setLoading(true);
      const response = await searchPatientsApi(text);
      setLoading(false);

      setPatients(response);
    } catch (err) {
      setLoading(false);
      setError(err);
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
    getPatient,
    searchPatients,
    addPatient,
    updatePatient,
    deletePatient,
    loading,
    error,
    patient,
    patients,
  };
}
