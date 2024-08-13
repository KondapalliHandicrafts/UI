import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Send = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <path d="M0 0l20 10-20 10v-20zM0 8v4l10-2-10-2z" />
    </SvgIcon>
  );
};

Send.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Send;
