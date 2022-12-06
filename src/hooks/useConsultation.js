import { useState } from "react";
import {
  getConsultationsApi,
  getConsultationsByPatientApi,
  getConsultationApi,
  addConsultationApi,
  updateImageConsultationApi,
  searchConsultationsByUserApi,
} from "../api/";
import { useAuth } from "./useAuth";

export function useConsultation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [consultations, setConsultations] = useState(null);
  const [consultation, setConsultation] = useState(null);
  const { auth } = useAuth();

  const getConsultations = async () => {
    try {
      setLoading(true);
      const response = await getConsultationsApi();
      setLoading(false);

      setConsultations(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const getConsultation = async (id) => {
    try {
      setLoading(true);
      const response = await getConsultationApi(id);
      setLoading(false);

      setConsultation(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const searchConsultationsByUser = async (id) => {
    try {
      setLoading(true);
      const response = await searchConsultationsByUserApi(id);
      setLoading(false);

      setConsultations(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const getConsultationsByPatient = async (idPatient) => {
    try {
      setLoading(true);
      const response = await getConsultationsByPatientApi(idPatient);
      setLoading(false);

      setConsultations(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateImageConsultation = async (id, image) => {
    try {
      setLoading(true);
      const response = await updateImageConsultationApi(id, image, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const addConsultation = async (data) => {
    try {
      setLoading(true);
      const response = await addConsultationApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return {
    getConsultations,
    getConsultation,
    getConsultationsByPatient,
    updateImageConsultation,
    searchConsultationsByUser,
    addConsultation,
    loading,
    error,
    consultations,
    consultation,
  };
}
