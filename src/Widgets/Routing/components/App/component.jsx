import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
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
const CardItem = lazy(() => import('__WIDGETS__/CardItem/components/App'));
const MyCart = lazy(() => import('__WIDGETS__/Cart/components/App'));
const MyOrders = lazy(() => import('__WIDGETS__/Orders/components/App'));
const AboutUs = lazy(() => import('__WIDGETS__/AboutUs/components/App'));
const NoPage = lazy(() => import('./NoPage'));
const ChangePassword = lazy(() =>
  import('__WIDGETS__/ChangePassword/components/App')
);
const ForgotPassword = lazy(() =>
  import('__WIDGETS__/ForgotPassword/components/App')
);
const ResetPassword = lazy(() =>
  import('__WIDGETS__/ResetPassword/components/App')
);

const Routing = props => {
  const { isLoggedIn, unmount } = props;
  useEffect(() => {
    return () => unmount();
  }, [unmount]);

  return (
    <Router>
      <Suspense fallback={<Loading open />}>
        <Header {...props} />
        <Switch>
          <Route path={paths.home} component={HomePage} />
          <Route path="/" exact>
            <Redirect to={paths.home} />
          </Route>
          <Route path={paths.cardItem} component={CardItem} />
          <Route path={paths.aboutUs} component={AboutUs} />
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
          <Route component={NoPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

Routing.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  unmount: PropTypes.func.isRequired
};
Routing.defaultProps = {};

export default Routing;
