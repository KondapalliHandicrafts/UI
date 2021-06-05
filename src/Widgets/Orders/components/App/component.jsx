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

const Orders = props => {
  const { dataLoaded, commonLoader } = props;
  const classes = styles(props);

  useEffect(() => {
    commonLoader(true);
  }, [commonLoader]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container}>
        My orders is under development.Please check out after few days
      </Grid>
    </React.Fragment>
  );
};

Orders.propTypes = {
  commonLoader: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired
};
Orders.defaultProps = {};

export default Orders;
