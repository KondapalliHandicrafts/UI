import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../SharedJSX';
import Card from './Card';

const styles = {
  container: {
    marginTop: '7rem',
    padding: '1rem 2rem'
  }
};

const Home = props => {
  const { data, getCardsData } = props;
  const dispatch = useDispatch();
  const dataLoading = useSelector(state => state.routing.dataLoading);

  useEffect(() => {
    dispatch(getCardsData());
  }, [dispatch, getCardsData]);

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid container sx={styles.container} spacing={2}>
        {data.map(item => (
          <Card {...props} item={item} key={item._id} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  getCardsData: PropTypes.func.isRequired
};

export default Home;
