import React, { useState } from "react";
import { getCurrentUserApi } from "../api/user";
import { useAuth } from ".";

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  const { auth } = useAuth();

  const getCurrentUser = async (token) => {
    try {
      setLoading(true);
      const response = await getCurrentUserApi(token);
      console.log("response", response);
      setLoading(false);
      return response;
    } catch (err) {
      console.log("err", err);
      setError(err);
    }
  };

  return {
    getCurrentUser,
    loading,
    error,
    users,
  };
}
