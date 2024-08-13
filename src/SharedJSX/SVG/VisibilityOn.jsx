import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const VisibilityOn = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <path d="M12 9q1.219 0 2.109 0.891t0.891 2.109-0.891 2.109-2.109 0.891-2.109-0.891-0.891-2.109 0.891-2.109 2.109-0.891zM12 17.016q2.063 0 3.539-1.477t1.477-3.539-1.477-3.539-3.539-1.477-3.539 1.477-1.477 3.539 1.477 3.539 3.539 1.477zM12 4.5q3.703 0 6.703 2.063t4.313 5.438q-1.313 3.375-4.313 5.438t-6.703 2.063-6.703-2.063-4.313-5.438q1.313-3.375 4.313-5.438t6.703-2.063z"></path>
    </SvgIcon>
  );
};

VisibilityOn.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default VisibilityOn;
