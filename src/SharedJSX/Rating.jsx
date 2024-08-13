import React from 'react';
import PropTypes from 'prop-types';
import { Rating as MuiRating } from '@mui/material';

const styles = {
  rating: {
    margin: '0 1rem'
  }
};

const Rating = props => {
  const {
    value,
    onChange = null,
    size = 'small',
    sx = {},
    name,
    ...others
  } = props;

  return (
    <MuiRating
      name={name}
      onChange={onChange}
      size={size}
      sx={[styles.rating, ...(Array.isArray(sx) ? sx : [sx])]}
      value={value}
      {...others}
    />
  );
};

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.string,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  value: PropTypes.number.isRequired
};

export default Rating;
