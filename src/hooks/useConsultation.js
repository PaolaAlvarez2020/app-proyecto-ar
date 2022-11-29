import { useState } from "react";
import {
  getConsultationsApi,
  getConsultationsByPatientApi,
  getConsultationApi,
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

  return {
    getConsultations,
    getConsultation,
    getConsultationsByPatient,
    loading,
    error,
    consultations,
    consultation,
  };
}
