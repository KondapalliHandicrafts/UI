import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Button, Card, IconButton, Loading, RouteLink } from '../../SharedJSX';
import { AddCartIcon, DeleteIcon } from '../../SharedJSX/SVG';
import { imageLoader } from '../../Global/helpers';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    padding: '2rem',
    paddingTop: '8rem'
  },
  wishlist: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  card: {
    position: 'relative'
  }
};

const Wishlist = props => {
  const { getWishlistDataRequest, addToWishlistRequest, data } = props;

  const dataLoading = useSelector(state => state.routing.dataLoading);
  useEffect(() => {
    getWishlistDataRequest();
  }, []);

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid container sx={styles.container} spacing={2}>
        {data.length === 0 && (
          <Grid item xs={12}>
            No wishlisted items to display. Add items from{' '}
            <RouteLink to="/home">here</RouteLink>
          </Grid>
        )}
        {data.map(card => (
          <Grid key={card._id} item xs={12} md={6}>
            <Card
              sx={styles.card}
              isActionsArea
              isRow={false}
              title={card.title}
              imageProps={{
                alt: card.title,
                width: '250px',
                height: 'auto',
                imageURL: imageLoader(card.filename)
              }}
              buttons={[
                <Button key={1} startIcon={<AddCartIcon />} onClick={() => {}}>
                  Add to Cart
                </Button>
              ]}
            >
              <IconButton
                sx={styles.wishlist}
                icon={<DeleteIcon />}
                onClick={() => addToWishlistRequest(card._id, 2)}
              />
              <Typography gutterBottom variant="h5" component="h5">
                Height: {card.height}&quot;
              </Typography>
              <Typography
                sx={styles.price}
                gutterBottom
                variant="body2"
                component="p"
              >
                &#8377; {card.price}/-
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

Wishlist.propTypes = {
  addToWishlistRequest: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  getWishlistDataRequest: PropTypes.func.isRequired
};

export default Wishlist;
