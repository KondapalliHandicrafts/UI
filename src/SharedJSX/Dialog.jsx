import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { CloseIcon } from './SVG';
import IconButton from './IconButton';
import ActionButtons from './ActionButtons';

const customTitleStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    borderBottom: `1px solid ${theme.colors.black}`,
    marginBottom: '1rem',
    padding: '1rem'
  },
  closeButton: {
    marginLeft: 'auto',
    padding: '0.4rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800,
    color: theme.colors.mainAction
  }
}));

const styles = makeStyles(theme => ({
  paperRoot: {
    minWidth: 600,
    [theme.breakpoints.down('xs')]: {
      minWidth: '100vw'
    }
  },
  actionButtons: {
    '& button': {
      marginRight: '1rem'
    }
  }
}));

const DialogTitleCustom = props => {
  const { children, onClose, closeButton } = props;
  const classes = customTitleStyles(props);
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {children}
      </Typography>
      {closeButton && onClose && (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

const DialogKH = props => {
  const [stateOpen, setStateOpen] = useState(false);

  const handleClose = () => {
    setStateOpen(false);
  };

  const {
    fullScreen,
    buttons,
    children,
    title,
    open,
    onClose,
    closeButton,
    ...others
  } = props;
  const classes = styles();
  const theme = useTheme();
  const smallFullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      fullScreen={fullScreen || smallFullScreen}
      open={open || stateOpen}
      onClose={open ? onClose : handleClose}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        classes: {
          root: classes.paperRoot
        }
      }}
      maxWidth="xs"
      {...others}
    >
      <DialogTitleCustom
        id="responsive-dialog-title"
        onClose={onClose}
        closeButton={closeButton}
      >
        {title}
      </DialogTitleCustom>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <ActionButtons className={classes.actionButtons} buttons={buttons} />
      </DialogActions>
    </Dialog>
  );
};

DialogKH.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool,
  buttons: PropTypes.node,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};
DialogKH.defaultProps = {
  buttons: null,
  closeButton: false,
  fullScreen: false,
  open: false
};

DialogTitleCustom.propTypes = {
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
DialogTitleCustom.defaultProps = {};

export default DialogKH;
