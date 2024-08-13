import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const AutoCompleteField = props => {
  const {
    required = false,
    name,
    defaultValue = null,
    rules = {},
    options,
    label = '',
    helperText = '',
    onChange = null,
    ...rest
  } = props;

  const { validate, ...restRules } = rules;

  const {
    formState: { errors },
    control
  } = useFormContext();

  const renderInput = useCallback(
    params => {
      return (
        <TextField
          {...params}
          autoComplete="off"
          error={!!errors[name]}
          fullWidth
          helperText={errors[name]?.message || helperText}
          label={label}
          required={required}
          size="small"
          variant="outlined"
        />
      );
    },
    [errors, helperText, label, name, required]
  );

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <Autocomplete
          disablePortal
          onChange={(a, b) => {
            field.onChange(b);
            if (onChange) onChange(a, b);
          }}
          options={options}
          size="small"
          {...field}
          renderInput={renderInput}
          {...rest}
        />
      )}
      rules={{
        required: { value: required, message: 'Required' },
        validate,
        ...restRules
      }}
    />
  );
};

AutoCompleteField.propTypes = {
  defaultValue: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  required: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  rules: PropTypes.object,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default AutoCompleteField;
