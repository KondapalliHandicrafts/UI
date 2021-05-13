import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(theme => ({
  buttonStyle: {
    color: theme.colors.black,
    borderRadius: 5,
    fontSize: '1.5rem',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: `'0 1rem 2rem ${theme.colors.black2}`,
      background: theme.colors.buttonColor,
      '&::after': {
        transform: 'scale(1.5)',
        opacity: 0
      }
    },
    '&:active': {
      backgroundColor: theme.colors.buttonColor,
      transform: 'translateY(0px)',
      boxShadow: `0 .5rem 1rem ${theme.colors.black2}`,
      outline: 'none'
    },
    '&:focus': {
      backgroundColor: theme.colors.buttonColor,
      transform: 'translateY(0px)',
      boxShadow: `0 .5rem 1rem ${theme.colors.black2}`,
      outline: 'none'
    }
  }
}));

const ButtonKH = props => {
  const { children, onClick, icon, className, variant, ...other } = props;
  const classes = styles(props);
  return (
    <Button
      className={classNames(classes.buttonStyle, className)}
      disableFocusRipple
      onClick={onClick}
      variant={variant}
      color="primary"
      {...other}
    >
      {children}
    </Button>
  );
};

ButtonKH.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string
};
ButtonKH.defaultProps = {
  icon: null,
  className: null,
  children: null,
  variant: 'contained'
};

export default ButtonKH;
