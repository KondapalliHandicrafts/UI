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

const HomePage = lazy(() => import('../../../Home/components/App'));
const LoginPage = lazy(() => import('../../../Login/components/App'));
const AddCard = lazy(() => import('../../../AddCard/components/App'));
const Register = lazy(() => import('../../../Register/components/App'));
const ForgotPassword = lazy(() =>
  import('../../../ForgotPassword/components/App')
);
const ResetPassword = lazy(() =>
  import('../../../ResetPassword/components/App')
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
            path="/addCard"
            component={AddCard}
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