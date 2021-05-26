import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { HeartIcon, AddCartIcon } from '__SHARED__/SVG';
import Button from '__SHARED__/Button';
import Card from '__SHARED__/Card';
import IconButton from '__SHARED__/IconButton';
import { imageLoader } from '__GLOBAL__/helpers';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '100%'
  },
  priceWrap: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  price: {
    marginLeft: 'auto'
  },
  addIcon: {
    flex: 1
  },
  selected: {
    color: theme.colors.favourite
  },
  wishlist: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  outOfStock: {
    color: theme.colors.error,
    textAlign: 'center',
    width: '100%'
  }
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { isLoggedIn, item, addToWishlistRequest, addToCartRequest } = props;
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
      <Card
        className={classes.root}
        isActionsArea
        imageProps={{
          alt: item.title,
          imageHeight: 200,
          imageURL: imageLoader(item.filename)
        }}
        title={item.title}
        buttons={[
          isLoggedIn && item.quantity ? (
            <Button
              className={classes.addIcon}
              size="small"
              key={1}
              startIcon={<AddCartIcon />}
              onClick={() => addToCartRequest(item._id)}
            >
              Add to Cart
            </Button>
          ) : (
            <Grid className={classes.outOfStock}> Out of stock</Grid>
          )
        ]}
      >
        <Grid container>
          <Grid className={classes.priceWrap} item xs={12}>
            {isLoggedIn && (
              <IconButton
                className={classNames(classes.wishlist, {
                  [classes.selected]: item.isWishlist
                })}
                size="small"
                icon={<HeartIcon />}
                onClick={e => {
                  addToWishlistRequest(item._id);
                  e.stopPropagation();
                }}
              />
            )}
            <Typography gutterBottom variant="body1" component="p">
              Height: {item.height}&quot;
            </Typography>
            <Typography
              className={classes.price}
              gutterBottom
              variant="body1"
              component="p"
            >
              &#8377; {item.price}/-
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

ImgMediaCard.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  addToWishlistRequest: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
};
