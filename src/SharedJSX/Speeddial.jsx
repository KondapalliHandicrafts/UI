import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const useStyles = makeStyles(theme => ({
  root: {
    // height: 380,
    flexGrow: 1
  },
  selected: {
    color: theme.colors.mainAction
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const SpeedDialKH = props => {
  const { hidden, className, actions, icon, active, onOpen } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial Tab"
        className={classNames(classes.speedDial, className)}
        hidden={hidden}
        icon={<SpeedDialIcon icon={icon} />}
        onClose={handleClose}
        onOpen={() => {
          handleOpen();
          onOpen();
        }}
        open={open}
        FabProps={{
          size: 'medium'
        }}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            classes={{
              fab: classNames({ [classes.selected]: active === index }),
              staticTooltipLabel: classNames({
                [classes.selected]: active === index
              })
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            // delay={10}
            tooltipOpen
            onClick={() => {
              handleClose();
              action.onClick();
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

SpeedDialKH.propTypes = {
  active: PropTypes.number.isRequired,
  actions: PropTypes.array.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  onOpen: PropTypes.func,
  hidden: PropTypes.bool
};

SpeedDialKH.defaultProps = {
  className: null,
  icon: null,
  onOpen: false,
  hidden: false
};

export default SpeedDialKH;
