import * as React from 'react';
import PropTypes from 'prop-types';
import { Dialog, useTheme } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from './Button';
import IconButton from './IconButton';

const Confirmation = props => {
  const {
    buttonText = '',
    isDisabled = false,
    icon = null,
    title,
    content,
    handleOk
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = e => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = e => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <React.Fragment>
      {buttonText ? (
        <Button disabled={isDisabled} onClick={handleClickOpen}>
          {buttonText}
        </Button>
      ) : null}
      {icon ? (
        <IconButton disabled={isDisabled} onClick={handleClickOpen}>
          {icon}
        </IconButton>
      ) : null}
      <Dialog
        aria-describedby="alert-dialog-slide-description"
        keepMounted
        maxWidth="sm"
        onClose={handleClose}
        open={open}
      >
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        <DialogContent sx={{ minWidth: theme.breakpoints.values.sm }}>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={e => {
              handleClose(e);
              if (handleOk) handleOk();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

Confirmation.propTypes = {
  buttonText: PropTypes.string,
  content: PropTypes.string.isRequired,
  handleOk: PropTypes.func.isRequired,
  icon: PropTypes.node,
  isDisabled: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Confirmation;
