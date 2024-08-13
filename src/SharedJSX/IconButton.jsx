import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as MuiIconButton } from '@mui/material';

const IconButton = props => {
  const { children, onClick, id, sx = {}, ...others } = props;
  return (
    <MuiIconButton
      aria-label={id}
      disableFocusRipple
      disableRipple
      disableTouchRipple
      onClick={onClick}
      sx={[{ p: 0 }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...others}
    >
      {children}
    </MuiIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default IconButton;
