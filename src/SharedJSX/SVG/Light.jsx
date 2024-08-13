import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Light = props => {
  const { sx = {}, width = 18, height = 18, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      <path d="M3.563 18.563l1.781-1.828 1.406 1.406-1.781 1.828zM11.016 22.453v-2.953h1.969v2.953h-1.969zM12 5.484q2.484 0 4.242 1.758t1.758 4.242-1.758 4.242-4.242 1.758-4.242-1.758-1.758-4.242 1.758-4.242 4.242-1.758zM20.016 10.5h3v2.016h-3v-2.016zM17.25 18.141l1.406-1.359 1.781 1.781-1.406 1.406zM20.438 4.453l-1.781 1.781-1.406-1.406 1.781-1.781zM12.984 0.563v2.953h-1.969v-2.953h1.969zM3.984 10.5v2.016h-3v-2.016h3zM6.75 4.828l-1.406 1.406-1.781-1.781 1.406-1.406z"></path>
    </SvgIcon>
  );
};

Light.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Light;
