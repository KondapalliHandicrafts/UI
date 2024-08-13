import React, { Suspense, lazy } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Loading } from '../../SharedJSX';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../Home/Card'));
const LoginPage = lazy(() => import('../Login'));
// const AdminDashboard = lazy(() =>
//   import('__WIDGETS__/AdminDashboard/components/App')
// );
const Register = lazy(() => import('../Register'));
// const Profile = lazy(() => import('__WIDGETS__/Profile/components/App'));
// const Wishlist = lazy(() => import('__WIDGETS__/Wishlist/components/App'));
// const ChangePassword = lazy(() =>
//   import('__WIDGETS__/ChangePassword/components/App')
// );
const ForgotPassword = lazy(() => import('../ForgotPassword'));
const ResetPassword = lazy(() => import('../ResetPassword'));

const Routing = props => {
  // const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  return (
    <Router>
      <Suspense fallback={<Loading open />}>
        <Header {...props} />
        <Routes>
          <Route exact path="/">
            <Route element={<Navigate to="/home" />} />
          </Route>
          <Route component={<HomePage />} path="/home" />
          <Route element={<PublicRoute />}>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<ForgotPassword />} path="/forgotPassword" />
            <Route element={<ResetPassword />} path="/resetPassword/:id" />
            <Route element={<Register />} path="/signup" />
          </Route>
          <Route element={<PrivateRoute />}>
            {/* <Route
              path="/adminDashboard"
              element={AdminDashboard}
            />
            <Route
              path="/myWishlist"
              element={Wishlist}
            />
            <Route
              path="/changePassword"
              element={ChangePassword}
            />
            <Route
              path="/profile"
              element={Profile}
            /> */}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

Routing.propTypes = {};

export default Routing;
