import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtons(props) {
  const { value, exclusive, buttons, onChange, size } = props;

  return (
    <ToggleButtonGroup value={value} exclusive={exclusive} onChange={onChange}>
      {buttons.map(button => (
        <ToggleButton
          key={button.key}
          value={button.label}
          size={size}
          {...button}
        >
          {button.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

ToggleButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
  exclusive: PropTypes.bool,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

ToggleButtons.defaultProps = {
  exclusive: true,
  size: 'small'
};
