import { ReactElement, useContext } from 'react';
import { AuthContext } from '../auth'
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}:{children:ReactElement}) => {
  const {authState} = useContext(AuthContext);
  return (
    authState.logged ? <Navigate to={"/marvel"}/>: children
  )
}
