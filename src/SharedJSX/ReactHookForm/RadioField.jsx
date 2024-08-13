import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const RadioField = props => {
  const {
    required = false,
    name,
    defaultValue = null,
    rules = {},
    row = true,
    options,
    groupLabel = '',
    helperText = '',
    ...rest
  } = props;

  const { validate, ...restRules } = rules;

  const {
    formState: { errors },
    control
  } = useFormContext();
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <FormControl
          error={!!errors[name]}
          fullWidth
          required={required}
          size="small"
          variant="outlined"
        >
          {groupLabel ? (
            <FormLabel id="demo-radio-buttons-group-label">
              {groupLabel}
            </FormLabel>
          ) : null}
          <RadioGroup row={row} {...field} {...rest}>
            {options.map(item => (
              <FormControlLabel
                key={item.label}
                control={<Radio color="primary" size="small" />}
                disabled={item.disabled}
                label={item.label}
                value={item.value}
              />
            ))}
          </RadioGroup>
          {errors[name] || helperText ? (
            <FormHelperText error={Boolean(errors[name])}>
              {errors[name] ? errors[name].message : helperText}
            </FormHelperText>
          ) : null}
        </FormControl>
      )}
      rules={{
        required: { value: required, message: 'Required' },
        validate,
        ...restRules
      }}
    />
  );
};

RadioField.propTypes = {
  defaultValue: PropTypes.string,
  groupLabel: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  row: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  rules: PropTypes.object,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default RadioField;
