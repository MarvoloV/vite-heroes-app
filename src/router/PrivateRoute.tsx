import { ReactElement, useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { authState } = useContext(AuthContext);
  const {pathname,search} = useLocation();
  const lastPath = pathname+search;
  localStorage.setItem("last-path",lastPath);
  return authState.logged ? children : <Navigate to={"/login"} />;
};
