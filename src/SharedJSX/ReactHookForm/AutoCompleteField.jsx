import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const RadioField = props => {
  const {
    className,
    required,
    name,
    id,
    label,
    rules,
    options,
    ...others
  } = props;
  const { errors, control } = useFormContext();

  return (
    <Controller
      render={renderProps => {
        return (
          <Autocomplete
            className={className}
            id={id}
            options={options}
            {...renderProps}
            size="small"
            renderInput={params => (
              <TextField
                {...params}
                fullWidth
                id={id}
                label={label}
                variant="outlined"
                autoComplete="off"
                helperText={errors[name]?.message}
                error={!!errors[name]}
                required={required}
                size="small"
              />
            )}
            {...others}
          />
        );
      }}
      name={name}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

RadioField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  rules: PropTypes.object,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

RadioField.defaultProps = {
  className: null,
  label: null,
  rules: {},
  required: false
};

export default RadioField;
