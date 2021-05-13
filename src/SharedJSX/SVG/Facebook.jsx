import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const FacebookIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M21.984 12q0-2.063-0.773-3.867t-2.156-3.188-3.188-2.156-3.867-0.773-3.867 0.773-3.188 2.156-2.156 3.188-0.773 3.867q0 1.828 0.586 3.445t1.688 2.93 2.555 2.203 3.141 1.219v-6.797h-1.969v-3h1.969v-2.484q0-0.984 0.492-1.781t1.266-1.266 1.758-0.469h2.484v3h-1.969q-0.422 0-0.727 0.305t-0.305 0.68v2.016h3v3h-3v6.938q1.922-0.188 3.563-1.031t2.859-2.18 1.898-3.047 0.68-3.68z"></path>
    </SvgIcon>
  );
};

FacebookIcon.propTypes = { className: PropTypes.string };
FacebookIcon.defaultProps = { className: null };

export default FacebookIcon;
