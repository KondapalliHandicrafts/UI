import React from 'react';
import PropTypes from 'prop-types';
import { Grid, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const styles = {
  root: {
    flexGrow: 1
  },
  selected: {
    color: 'colors.mainAction'
  },
  speedDial: {
    position: 'absolute',
    bottom: theme => theme.spacing(2),
    right: theme => theme.spacing(2)
  }
};

const SpeedDialJK = props => {
  const {
    isHidden = false,
    sx = {},
    actions,
    icon = null,
    active,
    onOpen = false
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid sx={styles.root}>
      <SpeedDial
        ariaLabel="SpeedDial Tab"
        FabProps={{
          size: 'medium'
        }}
        hidden={isHidden}
        icon={<SpeedDialIcon icon={icon} />}
        onClose={handleClose}
        onOpen={() => {
          handleOpen();
          onOpen();
        }}
        open={open}
        sx={[styles.speedDial, ...(Array.isArray(sx) ? sx : [sx])]}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={() => {
              handleClose();
              action.onClick();
            }}
            sx={[active === index && styles.selected]}
            tooltipOpen
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Grid>
  );
};

SpeedDialJK.propTypes = {
  actions: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired,
  icon: PropTypes.node,
  isHidden: PropTypes.bool,
  onOpen: PropTypes.func,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default SpeedDialJK;
