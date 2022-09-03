import { Link } from "react-router-dom";
import { LoginForm } from '../components/LoginForms/LoginForm';
import { loginAction } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const authError = useSelector(state => state.auth.error)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({email, password}) => {
    dispatch(loginAction({email, password}))
      .then(({type}) => {
        if (type === 'auth/loginAction/fulfilled') {
          navigate('/')
        }
      })
  }

  return <>
    <h1>Login</h1>
    <LoginForm onSubmit={onSubmit}/>
    {authError && <p className="form-error">{authError.message}</p>}
    <Link to="/register">register</Link>
  </>
}

export default Login;
