import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const FirstPageIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M6 6h2.016v12h-2.016v-12zM18.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z"></path>
    </SvgIcon>
  );
};

FirstPageIcon.propTypes = { className: PropTypes.string };
FirstPageIcon.defaultProps = { className: null };

export default FirstPageIcon;
