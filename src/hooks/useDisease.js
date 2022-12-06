import { useState } from "react";
import { addDiseaseApi } from "../api/disease";
import { useAuth } from "./useAuth";

export function useDisease() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [diseases, setDiseases] = useState(null);
  const [disease, setDisease] = useState(null);
  const { auth } = useAuth();

  const addDisease = async (data) => {
    try {
      setLoading(true);
      const response = await addDiseaseApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return {
    addDisease,
    loading,
    error,
    diseases,
    disease,
  };
}
