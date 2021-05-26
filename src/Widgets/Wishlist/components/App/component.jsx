import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Loading from '__SHARED__/Loading';
import Card from '__SHARED__/Card';
import Button from '__SHARED__/Button';
import IconButton from '__SHARED__/IconButton';
import RouteLink from '__SHARED__/RouteLink';
import { AddCartIcon, DeleteIcon } from '__SHARED__/SVG';
import { imageLoader } from '__GLOBAL__/helpers';
import { paths } from '__GLOBAL__/constants';

const styles = makeStyles(() => ({
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
}));

const Wishlist = props => {
  const {
    dataLoaded,
    getWishlistDataRequest,
    addToWishlistRequest,
    addToCartRequest,
    data
  } = props;
  const classes = styles(props);

  useEffect(() => {
    getWishlistDataRequest();
  }, [getWishlistDataRequest]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container} spacing={2}>
        {data.length === 0 && (
          <Grid item xs={12}>
            No wishlisted items to display. Add items from{' '}
            <RouteLink to={paths.home}>here</RouteLink>
          </Grid>
        )}
        {data.map(card => (
          <Grid key={card._id} item xs={12} md={6}>
            <Card
              className={classes.card}
              isActionsArea
              isRow={false}
              title={card.title}
              imageProps={{
                alt: card.title,
                width: '235px',
                height: 'auto',
                imageURL: imageLoader(card.filename)
              }}
              buttons={[
                <Button
                  key={1}
                  startIcon={<AddCartIcon />}
                  onClick={() => addToCartRequest(card._id, 2)}
                >
                  Add to Cart
                </Button>
              ]}
            >
              <IconButton
                className={classes.wishlist}
                icon={<DeleteIcon />}
                onClick={() => addToWishlistRequest(card._id, 2)}
              />
              <Typography gutterBottom variant="body1" component="p">
                Height: {card.height}&quot;
              </Typography>
              <Typography
                className={classes.price}
                gutterBottom
                variant="body1"
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
  addToCartRequest: PropTypes.func.isRequired,
  addToWishlistRequest: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  getWishlistDataRequest: PropTypes.func.isRequired
};
Wishlist.defaultProps = {};

export default Wishlist;
