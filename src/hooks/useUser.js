import { useState } from "react";
import {
  addUserApi,
  deleteUserApi,
  getCurrentUserApi,
  updateUserApi,
} from "../api/user";
import { useAuth } from "./useAuth";

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState(null);
  const { auth } = useAuth();

  const getCurrentUser = async (token) => {
    try {
      setLoading(true);
      const response = await getCurrentUserApi(token);
      setLoading(false);
      return response;
    } catch (err) {
      console.log("err", err);
      setError(err);
    }
  };

  const addUser = async (data) => {
    try {
      setLoading(true);
      const response = await addUserApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const updateUser = async (id, data) => {
    try {
      setLoading(true);
      const response = await updateUserApi(id, data, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      setLoading(true);
      const response = await deleteUserApi(id, auth.token);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return {
    getCurrentUser,
    addUser,
    updateUser,
    deleteUser,
    loading,
    error,
    users,
  };
}
