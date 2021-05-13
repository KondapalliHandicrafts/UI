import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Rating from '@material-ui/lab/Rating';

const styles = makeStyles(() => ({
  rating: {
    margin: '0 1rem'
  }
}));

const RatingKH = props => {
  const { value, onChange, size, className, readOnly, name, ...others } = props;
  const classes = styles();
  return (
    <Rating
      name={name}
      className={classNames(classes.rating, className)}
      value={value}
      onChange={onChange}
      size={size}
      readOnly={readOnly}
      {...others}
    />
  );
};

RatingKH.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  readOnly: PropTypes.bool
};

RatingKH.defaultProps = {
  className: null,
  size: 'small',
  readOnly: false,
  onChange: null
};

export default RatingKH;
