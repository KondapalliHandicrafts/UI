import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Logout = props => {
  const { sx = {}, width = 18, height = 18 } = props;
  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <path d="M3.984 5.016v13.969h8.016v2.016h-8.016q-0.797 0-1.383-0.609t-0.586-1.406v-13.969q0-0.797 0.586-1.406t1.383-0.609h8.016v2.016h-8.016zM17.016 6.984l4.969 5.016-4.969 5.016-1.406-1.453 2.578-2.578h-10.172v-1.969h10.172l-2.578-2.625z"></path>
    </SvgIcon>
  );
};

Logout.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Logout;
