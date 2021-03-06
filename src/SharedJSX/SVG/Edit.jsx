import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const EditIcon = props => {
  const classes = styles(props);
  return (
    <SvgIcon className={classes.icon} {...props}>
      <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828q0.281-0.281 0.703-0.281t0.703 0.281l2.344 2.344q0.281 0.281 0.281 0.703t-0.281 0.703zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z"></path>
    </SvgIcon>
  );
};

EditIcon.propTypes = {};

export default EditIcon;
