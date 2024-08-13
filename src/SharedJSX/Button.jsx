import React from 'react';
import { Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: 2,
      '&::after': {
        transform: 'scale(1.5)',
        opacity: 0
      }
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: 2,
      outline: 'none'
    },
    '&:focus': {
      transform: 'translateY(0px)',
      boxShadow: 1,
      outline: 'none'
    }
  },
  primary: {
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'primary.main'
    }
  },
  secondary: {
    backgroundColor: 'secondary.main',
    '&:hover': {
      backgroundColor: 'secondary.main'
    }
  }
};

const Button = props => {
  const {
    children,
    onClick,
    sx = {},
    color = 'primary',
    variant = 'contained',
    ...other
  } = props;
  return (
    <MuiButton
      disableFocusRipple
      disableRipple
      disableTouchRipple
      onClick={onClick}
      sx={[
        styles.buttonStyle,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      variant={variant}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  variant: PropTypes.string
};

export default Button;
