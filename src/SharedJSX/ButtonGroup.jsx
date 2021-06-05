import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  buttonGroup: {
    '& button': {
      textTransform: 'capitalize',
      fontWeight: 400
    }
  }
}));

export default function BasicButtonGroup(props) {
  const { className, variant, buttons, ...others } = props;
  const classes = useStyles();
  return (
    <ButtonGroup
      className={classNames(classes.buttonGroup, className)}
      variant={variant}
      color="primary"
      size="small"
      {...others}
    >
      {buttons.map(button => (
        <Button
          key={button.key}
          variant={button.variant || variant}
          size="small"
          {...button}
        >
          {button.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

BasicButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string
};

BasicButtonGroup.defaultProps = {
  className: null,
  variant: 'text'
};
