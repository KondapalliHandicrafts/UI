import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

const styles = {
  light: {
    color: 'common.black'
  },
  dark: {
    color: 'common.white'
  }
};

const Text = props => {
  const {
    children,
    sx = {},
    component = 'div',
    variant = 'p',
    ...others
  } = props;
  const theme = useTheme();

  return (
    <Typography
      component={component}
      sx={[
        theme.palette.mode === 'light' ? styles.light : styles.dark,
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      variant={variant}
      {...others}
    >
      {children}
    </Typography>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.string,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  variant: PropTypes.string
};

export default Text;
