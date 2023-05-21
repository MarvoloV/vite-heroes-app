import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const LoginPage = () => {

  const navigate = useNavigate();
  const {onLogin:login} = useContext(AuthContext);
  const onLogin = () => {
    const lastPath= localStorage.getItem("last-path" || "/");
    login('Jorge Luis');
    navigate(`${lastPath}`, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
