import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Slider } from '@mui/material';

const SliderField = props => {
  const {
    required = false,
    name,
    rules = {},
    sx = {},
    step = 1,
    min = 0,
    max = 100,
    ...rest
  } = props;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <Slider
          max={max}
          min={min}
          step={step}
          valueLabelDisplay="auto"
          {...field}
          {...rest}
          sx={[...(Array.isArray(sx) ? sx : [sx])]}
        />
      )}
      rules={{
        required: { value: required, message: 'Required' },
        // validate: allValidations,
        ...rules
      }}
    />
  );
};

SliderField.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  required: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  rules: PropTypes.object,
  step: PropTypes.number,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default SliderField;
