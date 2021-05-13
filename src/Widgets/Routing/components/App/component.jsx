import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loading from '__SHARED__/Loading';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('__WIDGETS__/Home/components/App'));
const LoginPage = lazy(() => import('__WIDGETS__/Login/components/App'));
const AdminDashboard = lazy(() =>
  import('__WIDGETS__/AdminDashboard/components/App')
);
const Register = lazy(() => import('__WIDGETS__/Register/components/App'));
const Profile = lazy(() => import('__WIDGETS__/Profile/components/App'));
const Wishlist = lazy(() => import('__WIDGETS__/Wishlist/components/App'));
const ChangePassword = lazy(() =>
  import('__WIDGETS__/ChangePassword/components/App')
);
const ForgotPassword = lazy(() =>
  import('__WIDGETS__/ForgotPassword/components/App')
);
const ResetPassword = lazy(() =>
  import('__WIDGETS__/ResetPassword/components/App')
);

const routing = props => {
  const { isLoggedIn } = props;
  return (
    <Router>
      <Suspense fallback={<Loading open />}>
        <Header {...props} />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={HomePage} />
          <PublicRoute
            path="/login"
            component={LoginPage}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            path="/forgotPassword"
            component={ForgotPassword}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            path="/resetPassword/:id"
            component={ResetPassword}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/adminDashboard"
            component={AdminDashboard}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/myWishlist"
            component={Wishlist}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/changePassword"
            component={ChangePassword}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            path="/signup"
            component={Register}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

routing.propTypes = {};
routing.defaultProps = {};

export default routing;
