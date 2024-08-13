import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Upload = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <path d="M14.016 12.984h3l-5.016-4.969-5.016 4.969h3v4.031h4.031v-4.031zM19.359 10.031q1.922 0.141 3.281 1.57t1.359 3.398q0 2.063-1.477 3.539t-3.539 1.477h-12.984q-2.484 0-4.242-1.758t-1.758-4.242q0-2.203 1.57-3.961t3.773-1.992q0.984-1.828 2.766-2.953t3.891-1.125q2.531 0 4.711 1.781t2.648 4.266z"></path>
    </SvgIcon>
  );
};

Upload.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Upload;
