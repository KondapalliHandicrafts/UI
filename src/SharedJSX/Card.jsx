import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card as MuiCard,
  Typography
} from '@mui/material';
import ActionButtons from './ActionButtons';

const styles = {
  root: {
    display: 'flex'
  },
  cardContent: {
    flex: '1 0 auto',
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
};

const Card = props => {
  const {
    buttons = [],
    children,
    imageProps = null,
    isActionsArea = false,
    isRow = true,
    onClick = null,
    sx = {},
    title = null
  } = props;

  return (
    <MuiCard sx={[!isRow && styles.root, ...(Array.isArray(sx) ? sx : [sx])]}>
      <CardActionArea
        component={isActionsArea ? 'button' : 'div'}
        disabled={!isActionsArea}
        onClick={onClick}
        sx={styles.cardActionArea}
      >
        {imageProps ? (
          <CardMedia
            alt={imageProps.alt}
            component="img"
            image={imageProps.imageURL}
            sx={styles.cardMedia}
          />
        ) : null}
      </CardActionArea>
      <CardContent sx={styles.cardContent}>
        {title ? (
          <Typography component="h2" gutterBottom variant="h6">
            {title}
          </Typography>
        ) : null}
        {children}
        {!isRow && buttons.length > 0 && (
          <CardActions disableSpacing>
            <ActionButtons buttons={buttons} />
          </CardActions>
        )}
      </CardContent>
      {isRow && buttons.length > 0 ? (
        <CardActions disableSpacing>
          <ActionButtons buttons={buttons} />
        </CardActions>
      ) : null}
    </MuiCard>
  );
};

Card.propTypes = {
  buttons: PropTypes.array,
  children: PropTypes.OneofType(PropTypes.string, PropTypes.node).isRequired,
  imageProps: PropTypes.shapeOf({
    alt: PropTypes.string.isRequired,
    height: PropTypes.height,
    width: PropTypes.width,
    url: PropTypes.string.isRequired
  }),
  isActionsArea: PropTypes.bool,
  isRow: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  title: PropTypes.string
};

export default Card;
