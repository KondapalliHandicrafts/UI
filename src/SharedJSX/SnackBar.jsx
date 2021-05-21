import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const SimpleSnackbar = props => {
  const [messageOpen, setOpen] = useState(false);
  const { apiResult, autoHideDuration, open } = props;
  let severity;
  const { message, status } = apiResult.data;

  useEffect(() => {
    if (open) setOpen(true);
  }, [apiResult, open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (status === 1) severity = 'success';
  else if (status === -1) severity = 'Error';
  else severity = 'info';

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={messageOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

SimpleSnackbar.propTypes = {
  autoHideDuration: PropTypes.number,
  apiResult: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
};

SimpleSnackbar.defaultProps = {
  autoHideDuration: 5000
};

export default SimpleSnackbar;
