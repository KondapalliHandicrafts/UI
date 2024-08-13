import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const ExpandMore = props => {
  const {
    sx = {},
    width = 18,
    height = 18,
    direction = 'down',
    ...rest
  } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[
        styles.icon,
        { width, height },
        direction === 'left' && styles.left,
        direction === 'right' && styles.right,
        direction === 'up' && styles.up,
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      {...rest}
    >
      <path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
    </SvgIcon>
  );
};

ExpandMore.propTypes = {
  direction: PropTypes.string,
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default ExpandMore;
