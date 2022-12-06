import { useState, useEffect, createContext } from "react";
import { tokenObject } from "../api";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import { useUser } from "../hooks";
import { isUndefined } from "lodash";

export const AuthContext = createContext({
  auth: undefined,
  isLoading: true,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { getCurrentUser } = useUser();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await tokenObject
        .getToken()
        .then(async (result) => {
          if (result?.access) {
            const me = await getCurrentUser(result.access);
            setAuth({ token: result?.access, me });
          } else {
            setAuth(null);
          }
        })
        .catch((err) => {
          console.log(err);
          setAuth(null);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, []);

  const login = async (token) => {
    tokenObject.saveToken(token);
    const me = await getCurrentUser(token);
    // console.log(me, token);
    setAuth({ token, me });
  };

  const logout = () => {
    if (auth) {
      tokenObject.removeToken();
      setAuth(null);
    }
  };

  const valueContext = {
    auth,
    login,
    logout,
    isLoading,
  };

  if (isUndefined(auth) || isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
