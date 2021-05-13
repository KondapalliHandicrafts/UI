import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const LoginIcon = props => {
  const classes = styles(props);
  return (
    <SvgIcon className={classes.icon} {...props}>
      <path d="M11.016 6.984l-1.406 1.406 2.578 2.625h-10.172v1.969h10.172l-2.578 2.625 1.406 1.406 4.969-5.016zM20.016 18.984h-8.016v2.016h8.016q0.797 0 1.383-0.586t0.586-1.43v-13.969q0-0.844-0.586-1.43t-1.383-0.586h-8.016v2.016h8.016v13.969z"></path>
    </SvgIcon>
  );
};

LoginIcon.propTypes = {};

export default LoginIcon;
