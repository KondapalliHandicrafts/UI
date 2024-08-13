import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress } from '@mui/material';

const styles = {
  backdrop: {
    zIndex: 9999
  }
};

const Loading = props => {
  const { isOpen } = props;

  return (
    <Backdrop open={isOpen} sx={styles.backdrop}>
      <CircularProgress />
    </Backdrop>
  );
};

Loading.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Loading;
