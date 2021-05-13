import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = makeStyles(() => ({
  iconButton: {}
}));

const IconButtonKH = props => {
  const { className, icon, onClick, ...others } = props;
  const classes = styles();
  return (
    <IconButton
      className={classNames(classes.iconButton, className)}
      disableFocusRipple
      onClick={onClick}
      size="small"
      {...others}
    >
      {icon}
    </IconButton>
  );
};

IconButtonKH.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

IconButtonKH.defaultProps = {
  className: null
};

export default IconButtonKH;
