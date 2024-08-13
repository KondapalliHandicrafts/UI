import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { DATE_TIME_FORMAT } from './helpers';

const DateTimeField = props => {
  const {
    required = false,
    name,
    label = '',
    rules = {},
    sx = {},
    helperText = '',
    ...rest
  } = props;

  const {
    formState: { errors },
    control
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={null}
      name={name}
      render={({ field: { ref, ...fieldRest } }) => (
        <MobileDateTimePicker
          ampm={false}
          format={DATE_TIME_FORMAT}
          formatDensity="dense"
          label={label}
          slotProps={{
            textField: {
              fullWidth: true,
              helperText: errors[name]?.message || helperText,
              required,
              size: 'small',
              error: !!errors[name],
              variant: 'outlined'
            }
          }}
          sx={[...(Array.isArray(sx) ? sx : [sx])]}
          {...fieldRest}
          {...rest}
        />
      )}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

DateTimeField.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  rules: PropTypes.object,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default DateTimeField;
