import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const ArrowLeft = props => {
  const { sx = {}, width = 18, height = 18 } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <path d="M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
    </SvgIcon>
  );
};

ArrowLeft.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default ArrowLeft;
