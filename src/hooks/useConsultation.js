import { useState } from "react";
import { getConsultationsApi } from "../api/";
import { useAuth } from "./useAuth";

export function useConsultation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [consultations, setConsultations] = useState(null);
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

  return {
    getConsultations,
    loading,
    error,
    consultations,
  };
}
