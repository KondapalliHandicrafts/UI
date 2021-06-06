import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Loading from '__SHARED__/Loading';
import Button from '__SHARED__/Button';
import IconButton from '__SHARED__/IconButton';
// import ButtonGroup from '__SHARED__/ButtonGroup';
import ToggleButton from '__SHARED__/ToggleButton';
import { HeartIcon } from '__SHARED__/SVG';
import ReactImageMagnify from 'react-image-magnify';
import { types } from '__GLOBAL__/constants';
import { imageLoader } from '__GLOBAL__/helpers';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '7rem 2rem 2rem 2rem'
  },
  ImageWrap: {
    position: 'relative'
  },
  smallButton: {
    position: 'unset',
    marginBottom: '1rem',
    borderColor: theme.colors.buttonColor,
    color: theme.colors.black,
    '&$selected': {
      backgroundColor: theme.colors.buttonColor
    }
  },
  selected: {},
  wishlist: {
    position: 'absolute',
    top: 20,
    right: 15
  },
  buttonWrap: {
    marginTop: '2rem',
    justifyContent: 'center'
  },
  button: {
    width: '100%'
  },
  wishlisted: {
    color: theme.colors.favourite
  },
  outOfStock: {
    color: theme.colors.error,
    textAlign: 'center',
    width: '100%'
  }
}));

const CardItem = props => {
  const {
    data,
    dataLoaded,
    addToWishlistRequest,
    addToCartRequest,
    history,
    getCardDetails
  } = props;
  const [sizeButtons, setSizeButtons] = useState([]);
  const [size, setSize] = useState('');
  const classes = styles(props);
  const params = useParams(history);

  useEffect(() => {
    getCardDetails(params.id);
    setSize(history.location.state.size);
  }, [getCardDetails, params.id, setSize, history.location.state.size]);

  useEffect(() => {
    const tempButtons = [];
    if (data.sizes) {
      Object.keys(data.sizes).forEach((item, index) => {
        tempButtons.push({
          key: index + 1,
          label: item,
          className: classes.smallButton,
          classes: { selected: classes.selected },
          disableTouchRipple: true
        });
      });
      setSizeButtons([...tempButtons]);
    }
  }, [classes, data.sizes, size]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} sm={5} lg={4} className={classes.ImageWrap}>
          <ReactImageMagnify
            {...{
              isHintEnabled: true,
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: imageLoader(data.filename)
              },
              largeImage: {
                src:
                  data.filename &&
                  imageLoader(data.filename.replace('.', ' 2x.')),
                width: 1280,
                height: 960
              },
              // enlargedImagePortalId: 'portal',
              enlargedImageContainerDimensions: {
                width: '150%',
                height: '100%'
              }
            }}
          />
          <IconButton
            className={classNames(classes.wishlist, {
              [classes.wishlisted]:
                data.sizes && data.sizes[size] && data.sizes[size].isWishlist
            })}
            size="small"
            icon={<HeartIcon />}
            onClick={e => {
              addToWishlistRequest(params.id, size, types.CARDITEM);
              e.stopPropagation();
            }}
          />
          <Grid container className={classes.buttonWrap} spacing={2}>
            {data.sizes && data.sizes[size] && data.sizes[size].quantity ? (
              <React.Fragment>
                <Grid item sm={12} md={6}>
                  <Button
                    className={classes.button}
                    onClick={() =>
                      addToCartRequest(data._id, size, types.CARDITEM)
                    }
                  >
                    Add to cart
                  </Button>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Button className={classes.button} onClick={() => {}}>
                    Buy Now
                  </Button>
                </Grid>
              </React.Fragment>
            ) : (
              <Grid className={classes.outOfStock}>Out of stock</Grid>
            )}
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={6} className="portal" id="portal" /> */}
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h4" component="h5">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            M.R.P: &#8377;{' '}
            {data.sizes && data.sizes[size] && data.sizes[size].price}/-
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            Description: {data.description}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            Size: {size} (
            {data.sizes && data.sizes[size] && data.sizes[data.size].dimensions}
            )
          </Typography>
          {/* <ButtonGroup variant="outlined" buttons={sizeButtons || []} /> */}
          <ToggleButton
            value={size}
            buttons={sizeButtons}
            onChange={(e, value) => setSize(value)}
          />
          <Typography gutterBottom variant="body1" component="p">
            Color: color
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

CardItem.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  addToWishlistRequest: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  getCardDetails: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
CardItem.defaultProps = {};

export default CardItem;
