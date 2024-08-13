import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const styles = {
  actionButtons: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& button': {
      marginRight: '1rem'
    }
  }
};

const ActionButtons = props => {
  const { sx = {}, buttons } = props;
  return (
    <Grid sx={[styles.actionButtons, ...(Array.isArray(sx) ? sx : [sx])]}>
      {buttons.map(button => button)}
    </Grid>
  );
};

ActionButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default ActionButtons;
