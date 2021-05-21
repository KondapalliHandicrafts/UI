import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const SnackbarAPI = props => {
  const [messageOpen, setOpen] = useState(false);
  const { apiResult, autoHideDuration, open, status, ...others } = props;
  let severity;
  const { message } = apiResult.data;

  useEffect(() => {
    if (open) setOpen(true);
  }, [apiResult, open]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (status >= 200 && status < 300) severity = 'success';
  else if (status >= 400 && status < 599) severity = 'error';
  else if (status >= 100 && status <= 199) severity = 'info';

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={messageOpen}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      {...others}
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

SnackbarAPI.propTypes = {
  autoHideDuration: PropTypes.number,
  apiResult: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  status: PropTypes.number.isRequired
};

SnackbarAPI.defaultProps = {
  autoHideDuration: 50000
};

export default SnackbarAPI;
