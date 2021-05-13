import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const AboutIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M12 19.219q1.594 0 3.352-0.938t2.648-2.297q-0.047-1.313-2.109-2.203t-3.891-0.891-3.891 0.867-2.109 2.227q0.891 1.359 2.648 2.297t3.352 0.938zM12 5.016q-1.219 0-2.109 0.891t-0.891 2.109 0.891 2.109 2.109 0.891 2.109-0.891 0.891-2.109-0.891-2.109-2.109-0.891zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
    </SvgIcon>
  );
};

AboutIcon.propTypes = { className: PropTypes.string };
AboutIcon.defaultProps = { className: null };

export default AboutIcon;
