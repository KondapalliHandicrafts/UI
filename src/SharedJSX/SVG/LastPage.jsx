import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const LastPageIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M15.984 6h2.016v12h-2.016v-12zM5.578 7.406l1.406-1.406 6 6-6 6-1.406-1.406 4.594-4.594z"></path>
    </SvgIcon>
  );
};

LastPageIcon.propTypes = { className: PropTypes.string };
LastPageIcon.defaultProps = { className: null };

export default LastPageIcon;
