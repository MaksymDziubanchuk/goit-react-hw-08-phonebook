import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { RegisterForm } from '../components/LoginForms/RegisterForm';
import { registerAction } from '../redux/authSlice';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const authError = useSelector(state => state.auth.error)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = ({name, email, password}) => {
    dispatch(registerAction({name, email, password}))
      .then(({type}) => {
        if (type === 'auth/registerAction/fulfilled') {
          navigate('/')
        }
      });
  }

  return <>
    <h1>Register</h1>
    <RegisterForm onSubmit={onSubmit}/>
    {authError && <p className="form-error">{authError.message}</p>}
    <Link to="/login">login</Link>
  </>
}

export default Register;
