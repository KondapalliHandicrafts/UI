import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles(theme => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const AvatarKH = props => {
  const { alt, src, children, className, size, ...others } = props;
  const classes = styles();
  return (
    <Avatar
      className={classNames(
        {
          [classes.small]: size === 'small',
          [classes.large]: size === 'large'
        },
        className
      )}
      alt={alt}
      src={src}
      {...others}
    >
      {children}
    </Avatar>
  );
};

AvatarKH.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  size: PropTypes.oneOf('small', 'large', 'medium'),
  children: PropTypes.node
};

AvatarKH.defaultProps = {
  className: '',
  children: null,
  size: 'medium',
  src: null
};

export default AvatarKH;
