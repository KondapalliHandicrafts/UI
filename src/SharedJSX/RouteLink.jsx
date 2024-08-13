import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const styles = {
  link: {
    color: 'colors.buttonColor',
    margin: '0.5rem'
    // '&:hover': {
    //   textDecoration: 'none'
    // }
  }
};

const RouteLink = props => {
  const { sx = {}, to, children, ...others } = props;

  return (
    <Grid
      component={Link}
      sx={[styles.link, ...(Array.isArray(sx) ? sx : [sx])]}
      to={to}
      {...others}
    >
      {children}
    </Grid>
  );
};

RouteLink.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  to: PropTypes.string.isRequired
};

export default RouteLink;
