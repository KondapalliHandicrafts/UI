import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const HomeIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M9.984 9.984h4.031q0-0.797-0.609-1.383t-1.406-0.586-1.406 0.586-0.609 1.383zM18.984 9.281l3 2.719h-3v8.016h-4.969v-6h-4.031v6h-4.969v-8.016h-3l9.984-9 3.984 3.609v-2.625h3v5.297z" />
    </SvgIcon>
  );
};

HomeIcon.propTypes = { className: PropTypes.string };
HomeIcon.defaultProps = { className: null };

export default HomeIcon;
