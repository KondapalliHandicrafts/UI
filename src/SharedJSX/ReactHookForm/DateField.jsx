import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';
import { Controller, useFormContext } from 'react-hook-form';
import { CalenderIcon } from '__SHARED__/SVG';
import IconButton from '__SHARED__/IconButton';

const DateField = props => {
  const {
    required,
    name,
    id,
    label,
    rules,
    InputProps,
    className,
    ...others
  } = props;

  const { errors, control } = useFormContext();

  return (
    <Controller
      render={({ ref, ...renderProps }) => {
        return (
          <DatePicker
            className={className}
            fullWidth
            size="small"
            inputVariant="outlined"
            format="dd/MM/yyyy"
            label={label}
            required={required}
            helperText={errors[name]?.message}
            error={!!errors[name]}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => {}} icon={<CalenderIcon />} />
              ),
              ...InputProps
            }}
            {...renderProps}
            {...others}
          />
        );
      }}
      name={name}
      defaultValue={null}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

DateField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  InputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired
};

DateField.defaultProps = {
  className: null,
  InputProps: {},
  required: false,
  rules: {}
};
export default DateField;
