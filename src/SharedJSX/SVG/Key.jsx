import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const KeyIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M6.984 14.016q0.797 0 1.406-0.609t0.609-1.406-0.609-1.406-1.406-0.609-1.383 0.609-0.586 1.406 0.586 1.406 1.383 0.609zM12.656 9.984h10.359v4.031h-2.016v3.984h-3.984v-3.984h-4.359q-0.609 1.641-2.273 2.813t-3.398 1.172q-2.484 0-4.242-1.758t-1.758-4.242 1.758-4.242 4.242-1.758q1.734 0 3.398 1.172t2.273 2.813z"></path>
    </SvgIcon>
  );
};

KeyIcon.propTypes = { className: PropTypes.string };
KeyIcon.defaultProps = { className: null };

export default KeyIcon;
