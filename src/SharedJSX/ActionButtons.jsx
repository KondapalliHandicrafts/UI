import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(() => ({
  actionButtons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& button': {
      marginRight: '1rem'
    }
  }
}));

const ActionButtons = props => {
  const { className, buttons } = props;
  const classes = styles();
  return (
    <Grid className={classNames(className, classes.actionButtons)}>
      {buttons.map(button => button)}
    </Grid>
  );
};

ActionButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
  className: PropTypes.string
};

ActionButtons.defaultProps = {
  className: null
};

export default ActionButtons;
