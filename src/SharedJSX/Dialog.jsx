import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog as MuiDialog,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { CloseIcon } from './SVG';
import IconButton from './IconButton';

const styles = {
  paperRoot: {
    minWidth: { xs: '100vw', sm: 600 }
  },
  root: {
    display: 'flex',
    borderBottom: `1px solid`,
    marginBottom: '1rem',
    padding: '1rem'
  },
  closeButton: {
    marginLeft: 'auto',
    padding: '0.4rem'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 800
  }
};

const DialogTitleCustom = props => {
  const { children, onClose, hasCloseButton } = props;
  return (
    <DialogTitle sx={styles.root}>
      {typeof children === 'string' ? (
        <Typography sx={styles.title}>{children}</Typography>
      ) : (
        children
      )}
      {hasCloseButton && onClose ? (
        <IconButton id="dialog-close" onClick={onClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Dialog = props => {
  const {
    buttons = null,
    children,
    title,
    isOpen = false,
    onClose,
    hasCloseButton = false,
    ...others
  } = props;

  const theme = useTheme();
  const smallFullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiDialog
      aria-labelledby="responsive-dialog-title"
      fullScreen={smallFullScreen}
      maxWidth="lg"
      onClose={onClose}
      open={isOpen}
      {...others}
    >
      <DialogTitleCustom
        closeButton={hasCloseButton}
        id="responsive-dialog-title"
        onClose={onClose}
      >
        {title}
      </DialogTitleCustom>
      <DialogContent sx={{ minWidth: 600 }}>{children}</DialogContent>
      <DialogActions>
        {buttons ? buttons.map(item => item) : null}
      </DialogActions>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  buttons: PropTypes.node,
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  isFullScreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

DialogTitleCustom.propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Dialog;
