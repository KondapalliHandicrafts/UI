import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(() => ({
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const LinkKH = props => {
  const { className, href, children, ...others } = props;
  const classes = styles();
  return (
    <Link
      className={classNames(classes.link, className)}
      href={href}
      {...others}
    >
      {children}
    </Link>
  );
};

LinkKH.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

LinkKH.defaultProps = {
  className: ''
};

export default LinkKH;
