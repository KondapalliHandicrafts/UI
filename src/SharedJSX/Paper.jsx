import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = makeStyles(() => ({
  paper: {
    padding: '3rem'
  }
}));

const PaperKH = props => {
  const { className, href, children, ...others } = props;
  const classes = styles();
  return (
    <Paper className={classNames(classes.paper, className)} {...others}>
      {children}
    </Paper>
  );
};

PaperKH.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

PaperKH.defaultProps = {
  className: ''
};

export default PaperKH;
