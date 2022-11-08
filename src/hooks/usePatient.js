import { useState } from "react";
import { getPatientsApi } from "../api/";
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

  return {
    getPatients,
    loading,
    error,
    patients,
  };
}
