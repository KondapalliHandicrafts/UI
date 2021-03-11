import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  link: {
    color: theme.colors.buttonColor,
    margin: '0.5rem'
    // '&:hover': {
    //   textDecoration: 'none'
    // }
  }
}));

const RouteLink = props => {
  const { className, to, children, ...others } = props;
  const classes = styles();
  return (
    <Link className={classNames(classes.link, className)} to={to} {...others}>
      {children}
    </Link>
  );
};

RouteLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

RouteLink.defaultProps = {
  className: ''
};

export default RouteLink;
