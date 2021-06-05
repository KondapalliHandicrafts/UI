import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const CheckField = props => {
  const {
    className,
    required,
    name,
    id,
    label,
    rules,
    options,
    defaultValue,
    disabled,
    ...others
  } = props;
  const { errors, control } = useFormContext();

  return (
    <Controller
      render={({ value, onChange, onBlur }) => {
        return (
          <FormControl
            className={className}
            fullWidth
            variant="outlined"
            size="small"
            required={required}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  id={id}
                  color="primary"
                  onBlur={onBlur}
                  onChange={e => onChange(e.target.checked)}
                  checked={Boolean(value)}
                  {...others}
                />
              }
              disabled={disabled}
              label={label}
            />
            {errors[name] && (
              <FormHelperText error>{errors[name].message}</FormHelperText>
            )}
          </FormControl>
        );
      }}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: { value: required, message: 'Required' },
        ...rules
      }}
    />
  );
};

CheckField.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  rules: PropTypes.object,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

CheckField.defaultProps = {
  className: null,
  defaultValue: false,
  disabled: false,
  label: null,
  rules: {},
  required: false
};

export default CheckField;
