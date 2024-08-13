import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const VerticalMenu = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 24 24"
      {...rest}
    >
      <g>
        <g>
          <g>
            <circle cx="12" cy="4" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <circle cx="12" cy="20" r="2.5" />
          </g>
        </g>
      </g>
    </SvgIcon>
  );
};

VerticalMenu.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default VerticalMenu;
