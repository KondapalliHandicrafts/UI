import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  primary: {
    color: 'colors.progressbarColor',
    backgroundColor: 'colors.footerNav',
    borderRadius: '10px'
  },
  value: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginLeft: '1.5rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 500,
    marginBottom: '0.5rem'
  }
};

const ProgressBar = props => {
  const { value, heading = null } = props;

  return (
    <Grid container sx={styles.root}>
      <Grid item md={11} xs={10}>
        <Typography component="h4" sx={styles.title} variant="h4">
          {heading}
        </Typography>
        <LinearProgress
          sx={styles.primary}
          value={value}
          variant="determinate"
        />
      </Grid>
      <Grid item md={1} xs={2}>
        <Typography component="h5" sx={styles.value} variant="h5">
          {value}%
        </Typography>
      </Grid>
    </Grid>
  );
};

ProgressBar.propTypes = {
  heading: PropTypes.string,
  value: PropTypes.number.isRequired
};

export default ProgressBar;
