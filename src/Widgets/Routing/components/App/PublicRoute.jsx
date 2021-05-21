import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '__GLOBAL__/constants';

const PublicRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? <Redirect to={paths.home} /> : <Component {...props} />
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
PublicRoute.defaultProps = {};
export default PublicRoute;
