import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const VisibilityOnIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M12 9q1.219 0 2.109 0.891t0.891 2.109-0.891 2.109-2.109 0.891-2.109-0.891-0.891-2.109 0.891-2.109 2.109-0.891zM12 17.016q2.063 0 3.539-1.477t1.477-3.539-1.477-3.539-3.539-1.477-3.539 1.477-1.477 3.539 1.477 3.539 3.539 1.477zM12 4.5q3.703 0 6.703 2.063t4.313 5.438q-1.313 3.375-4.313 5.438t-6.703 2.063-6.703-2.063-4.313-5.438q1.313-3.375 4.313-5.438t6.703-2.063z"></path>
    </SvgIcon>
  );
};

VisibilityOnIcon.propTypes = { className: PropTypes.string };
VisibilityOnIcon.defaultProps = { className: null };

export default VisibilityOnIcon;
