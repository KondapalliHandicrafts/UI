import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';
import Card from '../Card';

const styles = makeStyles(() => ({
  container: {
    marginTop: '7rem',
    padding: '1rem 2rem'
  }
}));

const Home = props => {
  const { dataLoaded, data, getCardsData, cardsUnmount } = props;
  const classes = styles(props);

  useEffect(() => {
    getCardsData();
    return () => cardsUnmount();
  }, [getCardsData, cardsUnmount]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container} spacing={2}>
        {data.length === 0 ? (
          <Grid>No Items on stock. Sorry for inconvenience</Grid>
        ) : (
          <Card data={data} {...props} />
        )}
      </Grid>
    </React.Fragment>
  );
};

Home.propTypes = {
  cardsUnmount: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  getCardsData: PropTypes.func.isRequired
};
Home.defaultProps = {};

export default Home;
