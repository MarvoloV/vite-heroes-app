import { createContext } from "react";
import { InitialStateAuth } from "./AuthReducer";

interface IAuthContext{
  authState:InitialStateAuth,
  onLogin:(name?: string) => void
  logout:()=>void
};

export const AuthContext = createContext({} as IAuthContext);
