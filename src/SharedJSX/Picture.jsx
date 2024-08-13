import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const Picture = props => {
  const { images, pictureClass = {}, imageClass = {} } = props;
  return (
    <Grid component="picture" sx={pictureClass}>
      {images.map((image, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <source key={index} srcSet={image.src} type={image.type} />
      ))}
      <Grid
        alt={images[images.length - 1].src}
        component="img"
        src={images[images.length - 1].src}
        sx={imageClass}
      />
    </Grid>
  );
};

Picture.propTypes = {
  imageClass: PropTypes.string,
  images: PropTypes.array.isRequired,
  pictureClass: PropTypes.string
};

export default Picture;
