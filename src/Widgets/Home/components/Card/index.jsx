import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  priceWrap: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  price: {
    marginLeft: 'auto'
  },
  actions: {
    justifyContent: 'flex-end'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { isLoggedIn, item } = props;
  return (
    <Grid item xs={6} sm={4} md={3} xl={2}>
      <Card className={classes.root} raised>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={item.title}
            image={`data:image/webp;base64,${item.filedata}`}
            title={item.title}
          />
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6" component="h6">
                  {item.title}
                </Typography>
              </Grid>
              <Grid className={classes.priceWrap} item xs={12}>
                <Typography gutterBottom variant="h5" component="h5">
                  Height: {item.height}&quot;
                </Typography>
                <Typography
                  className={classes.price}
                  gutterBottom
                  variant="body2"
                  component="p"
                >
                  &#8377; {item.price}/-
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        {isLoggedIn && (
          <CardActions className={classes.actions}>
            <Button size="small" color="primary">
              Add to wishlist
            </Button>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
          </CardActions>
        )}
      </Card>
    </Grid>
  );
}

ImgMediaCard.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
};
