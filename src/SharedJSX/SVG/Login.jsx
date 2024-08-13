import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Login = props => {
  const { sx = {}, width = 18, height = 18 } = props;
  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <path d="M11.016 6.984l-1.406 1.406 2.578 2.625h-10.172v1.969h10.172l-2.578 2.625 1.406 1.406 4.969-5.016zM20.016 18.984h-8.016v2.016h8.016q0.797 0 1.383-0.586t0.586-1.43v-13.969q0-0.844-0.586-1.43t-1.383-0.586h-8.016v2.016h8.016v13.969z"></path>
    </SvgIcon>
  );
};

Login.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Login;
