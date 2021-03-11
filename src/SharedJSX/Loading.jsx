import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 9999
  }
}));

const Loading = props => {
  const { open } = props;
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress />
    </Backdrop>
  );
};

Loading.propTypes = {
  open: PropTypes.bool.isRequired
};
Loading.defaultProps = {};

export default Loading;
