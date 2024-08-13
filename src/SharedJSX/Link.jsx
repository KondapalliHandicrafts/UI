import React from 'react';
import { Link as MuiLink } from '@mui/material';
import PropTypes from 'prop-types';

const styles = {
  link: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: 'common.white',
    '&:hover': {
      textDecoration: 'none'
    }
  }
};

const Link = props => {
  const { sx = {}, href, children, ...others } = props;

  return (
    <MuiLink
      href={href}
      sx={[styles.link, ...(Array.isArray(sx) ? sx : [sx])]}
      {...others}
    >
      {children}
    </MuiLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default Link;
