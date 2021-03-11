import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Picture = props => {
  const { images, pictureClass, imageClass } = props;
  return (
    <picture className={classNames(pictureClass)}>
      {images.map((image, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <source key={index} type={image.type} srcSet={image.src} />
      ))}
      <img
        src={images[images.length - 1].src}
        alt={images[images.length - 1].src}
        className={classNames(imageClass)}
      />
    </picture>
  );
};

Picture.propTypes = {
  imageClass: PropTypes.string,
  images: PropTypes.array.isRequired,
  pictureClass: PropTypes.string
};

Picture.defaultProps = {
  imageClass: null,
  pictureClass: null
};

export default Picture;
