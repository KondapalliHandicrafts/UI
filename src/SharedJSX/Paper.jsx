import React from 'react';
import { Paper as MuiPaper } from '@mui/material';
import PropTypes from 'prop-types';

const styles = {
  paper: {
    padding: '3rem'
  }
};

const Paper = props => {
  const { sx = {}, href, children, ...others } = props;
  return (
    <MuiPaper
      sx={[styles.paper, ...(Array.isArray(sx) ? sx : [sx])]}
      {...others}
    >
      {children}
    </MuiPaper>
  );
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default Paper;
