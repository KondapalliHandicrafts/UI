import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';

const BasicFont = props => {
  const { className, children, component } = props;
  return (
    <Typography
      className={classNames(className)}
      vaiant="body1"
      component={component}
    >
      {children}
    </Typography>
  );
};

BasicFont.propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
  children: PropTypes.node.isRequired
};

BasicFont.defaultProps = {
  className: null,
  component: 'p'
};

export default BasicFont;
