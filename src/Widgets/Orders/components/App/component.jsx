import React from 'react';
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
  const { dataLoaded } = props;
  const classes = styles(props);
  return (
    <React.Fragment>
      <Loading open={dataLoaded} />
      <Grid container className={classes.container}>
        My orders is under development.Please check out after few days
      </Grid>
    </React.Fragment>
  );
};

Orders.propTypes = {
  dataLoaded: PropTypes.bool.isRequired
};
Orders.defaultProps = {};

export default Orders;
