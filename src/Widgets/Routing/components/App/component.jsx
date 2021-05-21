import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Loading from '__SHARED__/Loading';
import { paths } from '__GLOBAL__/constants';
import Header from './Header';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('__WIDGETS__/Home/components/App'));
const LoginPage = lazy(() => import('__WIDGETS__/Login/components/App'));
const AdminDashboard = lazy(() =>
  import('__WIDGETS__/AdminDashboard/components/App')
);
const Register = lazy(() => import('__WIDGETS__/Register/components/App'));
const Profile = lazy(() => import('__WIDGETS__/Profile/components/App'));
const Wishlist = lazy(() => import('__WIDGETS__/Wishlist/components/App'));
const MyCart = lazy(() => import('__WIDGETS__/Cart/components/App'));
const MyOrders = lazy(() => import('__WIDGETS__/Orders/components/App'));
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
          <Route path={paths.home} component={HomePage} />
          <Route path="/" exact>
            <Redirect to={paths.home} />
          </Route>
          <PublicRoute
            path={paths.login}
            component={LoginPage}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            path={paths.forgotPassword}
            component={ForgotPassword}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            path={paths.register}
            component={Register}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute
            path={paths.resetPassword}
            component={ResetPassword}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path={paths.adminDashboard}
            component={AdminDashboard}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path={paths.myCart}
            component={MyCart}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path={paths.myWishlist}
            component={Wishlist}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path={paths.changePassword}
            component={ChangePassword}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path={paths.profile}
            component={Profile}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path={paths.myOrders}
            component={MyOrders}
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
