import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  badge: {
    marginRight: '2rem'
  }
}));

export default function SimpleBadge(props) {
  const classes = useStyles();
  const { badgeContent, className, children, ...others } = props;
  return (
    <div className={classes.root}>
      <Badge
        className={classNames(classes.badge, className)}
        badgeContent={badgeContent}
        color="primary"
        {...others}
      >
        {children}
      </Badge>
    </div>
  );
}

SimpleBadge.propTypes = {
  badgeContent: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SimpleBadge.defaultProps = {
  badgeContent: 0,
  className: null
};
