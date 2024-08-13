import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { AddCartIcon, HeartIcon } from '../../SharedJSX/SVG';
import { Button, Card, IconButton } from '../../SharedJSX';
import { imageLoader } from '../../Global/helpers';

const styles = {
  root: {
    // maxWidth: 300,
    position: 'relative'
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
    color: 'colors.favourite'
  },
  wishlist: {
    position: 'absolute',
    top: 10,
    right: 10
  }
};

const ImgMediaCard = props => {
  const { isLoggedIn, item, addToWishlistRequest } = props;

  return (
    <Grid item lg={2} md={3} sm={4} xl={1} xs={12}>
      <Card
        buttons={[
          isLoggedIn && (
            <Button
              key={1}
              sx={styles.addIcon}
              onClick={() => {}}
              size="small"
              startIcon={<AddCartIcon />}
            >
              Add to Cart
            </Button>
          )
        ]}
        imageProps={{
          alt: item.title,
          imageHeight: 200,
          imageURL: imageLoader(item.filename)
        }}
        isActionsArea
        sx={styles.root}
        title={item.title}
      >
        <Grid container>
          <Grid item sx={styles.priceWrap} xs={12}>
            {isLoggedIn && (
              <IconButton
                sx={[styles.wishlist, item.isWishlist && styles.selected]}
                size="small"
                icon={<HeartIcon />}
                onClick={e => {
                  addToWishlistRequest(item._id);
                  e.stopPropagation();
                }}
              />
            )}
            <Typography component="h5" gutterBottom variant="h5">
              Height: {item.height}&quot;
            </Typography>
            <Typography
              component="p"
              gutterBottom
              sx={styles.price}
              variant="body2"
            >
              &#8377; {item.price}/-
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

ImgMediaCard.propTypes = {
  addToWishlistRequest: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
};

export default ImgMediaCard;
