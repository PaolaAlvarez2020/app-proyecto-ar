import { useState, useEffect, createContext } from "react";
import { tokenObject } from "../api";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const { getCurrentUser } = useUser();

  useEffect(() => {
    (async () => {
      const token = await tokenObject.getToken();
      if (token.access) {
        const me = await getCurrentUser(token);
        setAuth({ token, me });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = async (token) => {
    tokenObject.saveToken(token);
    // console.log(me, token);
    const me = await getCurrentUser(token);
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
  };

  if (auth === undefined) {
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
