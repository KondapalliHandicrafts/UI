import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const AddCartIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M7.172 14.766q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969h3.281q0.938 1.969 1.875 3.984 0.234 0.422 1.078 2.227t1.313 2.789h7.031q3.516-6.375 3.844-7.031l1.734 0.984-3.844 6.984q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641zM17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609zM11.016 9v-3h-3v-2.016h3v-3h1.969v3h3v2.016h-3v3h-1.969z"></path>
    </SvgIcon>
  );
};

AddCartIcon.propTypes = { className: PropTypes.string };
AddCartIcon.defaultProps = { className: null };

export default AddCartIcon;
