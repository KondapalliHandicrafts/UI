import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ActionButtons from './ActionButtons';
import Button from './Button';

const styles = makeStyles(theme => ({
  paperRoot: {
    minWidth: 600,
    [theme.breakpoints.down('xs')]: {
      minWidth: '100vw'
    }
  }
}));

const Confirmation = props => {
  const [stateOpen, setStateOpen] = useState(false);

  const handleClose = () => setStateOpen(false);
  const handleOpen = () => setStateOpen(true);

  const {
    fullScreen,
    title,
    message,
    // buttonType,
    buttonText,
    okOnClick,
    oKText,
    cancelText,
    buttonProps,
    ...others
  } = props;
  const classes = styles();
  const theme = useTheme();
  const smallFullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <React.Fragment>
      <Button onClick={handleOpen} {...buttonProps}>
        {buttonText}
      </Button>
      <Dialog
        fullScreen={fullScreen || smallFullScreen}
        open={stateOpen}
        onClose={handleClose}
        aria-labelledby="confirmation-dialog-title"
        PaperProps={{
          classes: {
            root: classes.paperRoot
          }
        }}
        maxWidth="xs"
        {...others}
      >
        <DialogTitle id="confirmation-dialog-title">{title}</DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <ActionButtons
            buttons={[
              <Button key={1} onClick={okOnClick}>
                {oKText}
              </Button>,
              <Button key={2} onClick={handleClose}>
                {cancelText}
              </Button>
            ]}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

Confirmation.propTypes = {
  buttonProps: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
  //   buttonType: PropTypes.number.isRequired,
  cancelText: PropTypes.string,
  fullScreen: PropTypes.bool,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  oKText: PropTypes.string,
  okOnClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};
Confirmation.defaultProps = {
  buttonProps: {},
  cancelText: 'No',
  oKText: 'Yes',
  fullScreen: false
};

export default Confirmation;
