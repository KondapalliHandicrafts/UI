import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
