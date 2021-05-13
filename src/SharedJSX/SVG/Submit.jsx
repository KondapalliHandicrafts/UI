import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const SubmitIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M0 0l20 10-20 10v-20zM0 8v4l10-2-10-2z" />
    </SvgIcon>
  );
};

SubmitIcon.propTypes = { className: PropTypes.string };
SubmitIcon.defaultProps = { className: null };

export default SubmitIcon;
