import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}));

const AboutUs = props => {
  const { dataLoaded, commonLoader, aboutUsUnmount } = props;
  const classes = styles(props);

  useEffect(() => {
    commonLoader(true);
    return () => aboutUsUnmount();
  }, [commonLoader, aboutUsUnmount]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container}>
        AboutUs widget is created and ready to use.
      </Grid>
    </React.Fragment>
  );
};

AboutUs.propTypes = {
  commonLoader: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  aboutUsUnmount: PropTypes.func.isRequired
};
AboutUs.defaultProps = {};

export default AboutUs;
