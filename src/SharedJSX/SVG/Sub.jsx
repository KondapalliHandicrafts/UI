import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const SubIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M18.984 12.984h-13.969v-1.969h13.969v1.969z"></path>;
    </SvgIcon>
  );
};

SubIcon.propTypes = { className: PropTypes.string };
SubIcon.defaultProps = { className: null };

export default SubIcon;
