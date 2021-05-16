import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const OrdersIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M6.984 15h2.016v2.016h-2.016v-2.016zM6.984 11.016h2.016v1.969h-2.016v-1.969zM6.984 6.984h2.016v2.016h-2.016v-2.016zM11.016 15h6v2.016h-6v-2.016zM11.016 11.016h6v1.969h-6v-1.969zM11.016 6.984h6v2.016h-6v-2.016zM20.109 3q0.328 0 0.609 0.258t0.281 0.633v16.219q0 0.328-0.281 0.609t-0.609 0.281h-16.219q-0.375 0-0.633-0.281t-0.258-0.609v-16.219q0-0.891 0.891-0.891h16.219zM18.984 5.016h-13.969v13.969h13.969v-13.969z"></path>
    </SvgIcon>
  );
};

OrdersIcon.propTypes = { className: PropTypes.string };
OrdersIcon.defaultProps = { className: null };

export default OrdersIcon;
