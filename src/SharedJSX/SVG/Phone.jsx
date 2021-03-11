import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const PhoneIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M20.016 15.375q0.422 0 0.703 0.281t0.281 0.703v3.469q0 1.172-0.984 1.172-6.984 0-12-5.016t-5.016-12q0-0.984 1.172-0.984h3.469q0.422 0 0.703 0.281t0.281 0.703q0 1.828 0.563 3.516 0.188 0.609-0.234 1.031l-1.922 1.688q2.156 4.5 6.891 6.797l1.547-1.969q0.281-0.281 0.703-0.281 0.234 0 0.328 0.047 1.688 0.563 3.516 0.563z"></path>
    </SvgIcon>
  );
};

PhoneIcon.propTypes = { className: PropTypes.string };
PhoneIcon.defaultProps = { className: null };

export default PhoneIcon;
