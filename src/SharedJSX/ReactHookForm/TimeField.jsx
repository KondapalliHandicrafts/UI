import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { TIME_FORMAT, parseTime } from './helpers';

const TimeField = props => {
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
        <MobileTimePicker
          ampm={false}
          format={TIME_FORMAT}
          label={label}
          slotProps={{
            previousIconButton: false,
            nextIconButton: false,
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
          views={['hours', 'minutes', 'seconds']}
          {...fieldRest}
          value={
            typeof fieldRest.value === 'string'
              ? parseTime(fieldRest.value)
              : fieldRest.value
          }
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

TimeField.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  rules: PropTypes.object,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  type: PropTypes.string
};

export default TimeField;
