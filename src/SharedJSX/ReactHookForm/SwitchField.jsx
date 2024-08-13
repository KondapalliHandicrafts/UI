import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const SwitchField = props => {
  const {
    required = false,
    name,
    label = '',
    defaultValue = false,
    rules = {},
    helperText = '',
    onChange = null,
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
          <FormControlLabel
            control={
              <Switch
                {...field}
                checked={Boolean(field.value)}
                color="primary"
                disableFocusRipple
                disableRipple
                disableTouchRipple
                onChange={e => {
                  field.onChange(e);
                  if (onChange) onChange(e);
                }}
                {...rest}
              />
            }
            label={label}
            labelPlacement="start"
            sx={{ justifyContent: 'center' }}
          />

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

SwitchField.propTypes = {
  defaultValue: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  rules: PropTypes.object,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default SwitchField;
