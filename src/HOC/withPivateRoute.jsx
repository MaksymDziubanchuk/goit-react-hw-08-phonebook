import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withPrivateRoute = Component => {
  return () => {
    const pending = useSelector(state => state.auth.pending);
    const user = useSelector(state => state.auth.user);

    if (pending) return <p>loading...</p>;

    return user ? <Component /> : <Navigate to="/" replace={true} />;
  };
};
