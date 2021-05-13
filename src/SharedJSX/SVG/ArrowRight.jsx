import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const ArrowRightIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
    </SvgIcon>
  );
};

ArrowRightIcon.propTypes = { className: PropTypes.string };
ArrowRightIcon.defaultProps = { className: null };

export default ArrowRightIcon;
