import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

const Snackbar = props => {
  const [messageOpen, setMessageOpen] = useState(false);
  const { apiResult, autoHideDuration = 5000, isOpen, onClose } = props;
  let severity;
  const { message, status } = apiResult;

  useEffect(() => {
    if (isOpen) setMessageOpen(true);
  }, [apiResult, isOpen]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageOpen(false);
    onClose();
  };
  if (status >= 200 && status <= 299) severity = 'success';
  else if (status >= 400 && status <= 599) severity = 'error';
  else severity = 'info';

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      open={messageOpen}
    >
      <Alert
        elevation={6}
        onClose={handleClose}
        severity={severity}
        variant="filled"
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

Snackbar.propTypes = {
  apiResult: PropTypes.object.isRequired,
  autoHideDuration: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Snackbar;
