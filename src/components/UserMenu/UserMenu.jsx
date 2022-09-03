
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/authSlice';

export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  }

  return <div>
    <span>{user?.email}</span>
    <button onClick={handleLogout}>logout</button>
  </div>
}
