import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Loading from '__SHARED__/Loading';
import Typography from '@material-ui/core/Typography';
import Card from '__SHARED__/Card';
import RouteLink from '__SHARED__/RouteLink';
import IconButton from '__SHARED__/IconButton';
import Button from '__SHARED__/Button';
import ButtonGroup from '__SHARED__/ButtonGroup';
import Paper from '__SHARED__/Paper';
import { AddOutlinedIcon, SubIcon } from '__SHARED__/SVG';
import { imageLoader } from '__GLOBAL__/helpers';
import { paths } from '__GLOBAL__/constants';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    padding: '8rem 2rem 2rem 2rem'
  },
  titlePriceWrap: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  card: {
    marginBottom: '2rem'
  },
  btnWrap: {
    display: 'flex',
    alignItems: 'center'
  },
  price: {
    textAlign: 'right'
  },
  textField: {
    '& input': {
      textAlign: 'center'
    }
  },
  addBtn: {
    marginLeft: '0.5rem',
    marginRight: '2rem',
    borderRadius: 5,
    backgroundColor: theme.colors.buttonColor,
    '&:hover': {
      backgroundColor: theme.colors.buttonColor
    }
  },
  subBtn: {
    marginRight: '0.5rem',
    borderRadius: 5,
    backgroundColor: theme.colors.buttonColor,
    '&:hover': {
      backgroundColor: theme.colors.buttonColor
    }
  },
  buyBtn: {
    marginTop: '2rem',
    width: '100%'
  },
  noCards: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}));

const Cart = props => {
  const {
    data,
    dataLoaded,
    getCartItemsRequest,
    deleteCartRequest,
    moveToWishlistRequest,
    updateCartRequest
  } = props;
  const classes = styles(props);
  let itemsAmount = 0.0;
  let totalAmount = 0.0;
  const deliveryCharge = 0.0;
  useEffect(() => {
    getCartItemsRequest();
  }, [getCartItemsRequest, data.quantity]);

  const updateCart = (cardId, value, size, quantity) => {
    if (quantity !== Number(value))
      updateCartRequest(cardId, Number(value), size);
  };

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} md={8}>
          {data.length === 0 && (
            <Grid className={classes.noCards}>
              Cart is empty. Please add some items from{' '}
              <RouteLink to={paths.home}>here</RouteLink>
            </Grid>
          )}
          {data.map(cart => {
            const { cardId: card, quantity, size } = cart;
            itemsAmount += card.price * quantity;
            totalAmount =
              itemsAmount + deliveryCharge + (itemsAmount * 18) / 100;
            return (
              <Card
                key={card._id + size}
                className={classes.card}
                isActionsArea
                isRow={false}
                title={
                  <Grid className={classes.titlePriceWrap}>
                    <Typography gutterBottom variant="subtitle2" component="h5">
                      {card.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">
                      &#8377; {card.price}/-
                    </Typography>
                  </Grid>
                }
                imageProps={{
                  alt: card.title,
                  width: '150px',
                  height: '150px',
                  imageURL: imageLoader(card.filename)
                }}
              >
                <Typography gutterBottom variant="body1" component="p">
                  Size: {size}
                </Typography>
                <Grid className={classes.btnWrap}>
                  <IconButton
                    className={classes.subBtn}
                    icon={<SubIcon />}
                    onClick={() => updateCart(card._id, quantity - 1, size)}
                  />
                  <TextField
                    className={classes.textField}
                    style={{ width: '10%' }}
                    value={quantity}
                    onBlur={e =>
                      updateCart(card._id, e.target.value, size, quantity)
                    }
                    InputProps={{
                      readOnly: true
                    }}
                  />
                  <IconButton
                    className={classes.addBtn}
                    icon={<AddOutlinedIcon />}
                    onClick={() => updateCart(card._id, quantity + 1, size)}
                  />
                  <ButtonGroup
                    buttons={[
                      {
                        key: 1,
                        label: 'Delete',
                        onClick: () => deleteCartRequest(card._id)
                      },
                      {
                        key: 2,
                        label: 'Move to wishlist',
                        onClick: () => moveToWishlistRequest(card._id, size)
                      }
                    ]}
                  />
                </Grid>
              </Card>
            );
          })}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper>
            <Grid container>
              <Grid item xs={8}>
                Items Amount:
              </Grid>
              <Grid className={classes.price} item xs={4}>
                &#8377; {itemsAmount}/-
              </Grid>
              <Grid item xs={8}>
                GST:
              </Grid>
              <Grid className={classes.price} item xs={4}>
                &#8377; {(itemsAmount * 18) / 100}/-
              </Grid>
              <Grid item xs={8}>
                Delivery charges:
              </Grid>
              <Grid className={classes.price} item xs={4}>
                &#8377; {deliveryCharge}/-
              </Grid>
              <Grid item xs={8}>
                Total Amount
              </Grid>
              <Grid className={classes.price} item xs={4}>
                &#8377; {totalAmount}/-
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.buyBtn} onClick={() => {}}>
                  Proceed to buy
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Cart.propTypes = {
  data: PropTypes.array.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  deleteCartRequest: PropTypes.func.isRequired,
  getCartItemsRequest: PropTypes.func.isRequired,
  moveToWishlistRequest: PropTypes.func.isRequired,
  updateCartRequest: PropTypes.func.isRequired
};
Cart.defaultProps = {};

export default Cart;
