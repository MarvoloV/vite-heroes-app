import { ReactElement, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import {  authReducer } from "./AuthReducer";
import { types } from "../types/types";

const init = () => {
  const user = localStorage.getItem("name");
  return {
    logged: !!user,
    name: user,
  };
};

export const AuthProvider = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const onLogin = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        name,
        logged: true,
      },
    };
    localStorage.setItem("name", name);

    dispatch(action);
  };
  const logout = () => {
    const action = {
      type: types.logout,
      payload: {},
    };
    localStorage.removeItem('name');
    dispatch(action);
  };
  return (
    <AuthContext.Provider value={{ authState, onLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
