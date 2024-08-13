import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Pause = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <path d="M12.984 15.984v-7.969h2.016v7.969h-2.016zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM9 15.984v-7.969h2.016v7.969h-2.016z"></path>
    </SvgIcon>
  );
};

Pause.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Pause;
