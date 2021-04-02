import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const CalenderIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M20.016 21v-12.984h-16.031v12.984h16.031zM20.016 3q0.797 0 1.383 0.609t0.586 1.406v15.984q0 0.797-0.586 1.406t-1.383 0.609h-16.031q-0.797 0-1.383-0.609t-0.586-1.406v-15.984q0-0.797 0.586-1.406t1.383-0.609h1.031v-2.016h1.969v2.016h10.031v-2.016h1.969v2.016h1.031z"></path>
    </SvgIcon>
  );
};

CalenderIcon.propTypes = { className: PropTypes.string };
CalenderIcon.defaultProps = { className: null };

export default CalenderIcon;
