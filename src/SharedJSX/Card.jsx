import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ActionButtons from '__SHARED__/ActionButtons';

const useStyles = makeStyles(() => ({
  root: props =>
    !props.isRow && {
      display: 'flex'
    },
  cardContent: {
    flex: '1 1 auto',
    paddingBottom: 0
  },
  cardActionArea: {
    flexDirection: props => (props.isRow ? 'row' : 'column'),
    width: props => (props.isRow ? '100%' : 'auto')
  },
  cardMedia: {
    height: props =>
      props.isRow ? 'auto' : props.imageProps.height || '150px',
    width: props => (props.isRow ? '100%' : props.imageProps.width || '150px')
  }
}));

const CardKH = props => {
  const {
    title,
    className,
    imageProps,
    buttons,
    isActionsArea,
    children,
    isRow,
    isActionButton,
    onClick
  } = props;
  const classes = useStyles(props);
  return (
    <Card className={classNames(classes.root, className)}>
      <CardActionArea
        className={classes.cardActionArea}
        component={isActionsArea ? 'button' : 'div'}
        disabled={!isActionsArea}
        onClick={onClick}
      >
        {imageProps && (
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt={imageProps.alt}
            image={imageProps.imageURL}
          />
        )}
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        {title && (
          <Typography gutterBottom variant="subtitle2" component="h2">
            {title}
          </Typography>
        )}
        {children}
        {!isRow && buttons.length > 0 && buttons.some(item => item) && (
          <CardActions disableSpacing>
            <ActionButtons buttons={buttons} />
          </CardActions>
        )}
      </CardContent>
      {isRow && buttons.length > 0 && buttons.some(item => item) && (
        <CardActions disableSpacing>
          {!isActionButton ? (
            buttons.map(button => button)
          ) : (
            <ActionButtons buttons={buttons} />
          )}
        </CardActions>
      )}
    </Card>
  );
};

CardKH.propTypes = {
  buttons: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.OneofType(PropTypes.string, PropTypes.node).isRequired,
  isActionsArea: PropTypes.bool,
  isActionButton: PropTypes.bool,
  isRow: PropTypes.bool,
  imageProps: PropTypes.shapeOf({
    alt: PropTypes.string.isRequired,
    height: PropTypes.height,
    width: PropTypes.width,
    url: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func,
  title: PropTypes.string
};

CardKH.defaultProps = {
  buttons: [],
  className: null,
  isActionsArea: false,
  isActionButton: false,
  isRow: true,
  imageProps: null,
  onClick: null,
  title: null
};

export default CardKH;
