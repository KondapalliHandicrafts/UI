import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const InfoIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M12.984 9v-2.016h-1.969v2.016h1.969zM12.984 17.016v-6h-1.969v6h1.969zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
    </SvgIcon>
  );
};

InfoIcon.propTypes = { className: PropTypes.string };
InfoIcon.defaultProps = { className: null };

export default InfoIcon;
