import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const CheckField = props => {
  const {
    required = false,
    name,
    label = '',
    defaultValue = false,
    rules = {},
    helperText = '',
    onChange = null,
    sx = {},
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
          sx={[...(Array.isArray(sx) ? sx : [sx])]}
          variant="outlined"
        >
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={Boolean(field.value)}
                color="primary"
                disableRipple
                onChange={e => {
                  field.onChange(e);
                  if (onChange) onChange(e);
                }}
                {...rest}
              />
            }
            label={label ? <FormLabel>{label}</FormLabel> : null}
            labelPlacement="end"
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

CheckField.propTypes = {
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

export default CheckField;
