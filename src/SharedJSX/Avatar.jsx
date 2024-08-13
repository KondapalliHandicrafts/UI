import * as React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MuiAvatar } from '@mui/material';

const styles = {
  avatar: {
    bgcolor: 'primary.main',
    color: 'common.white'
  }
};

const Avatar = props => {
  const { alt = '', src = '', children, sx } = props;
  return (
    <MuiAvatar
      alt={alt}
      src={src}
      sx={[styles.avatar, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </MuiAvatar>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.node).isRequired,
  src: PropTypes.string,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default Avatar;
