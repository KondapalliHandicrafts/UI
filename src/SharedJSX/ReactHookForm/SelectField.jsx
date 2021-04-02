import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const SelectField = props => {
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
  const { validate, ...restRules } = rules;

  const allValidations = {
    reqired: value => (required ? value !== 'Select' || 'Required' : true),
    ...validate
  };

  return (
    <Controller
      render={renderProps => {
        return (
          <FormControl
            fullWidth
            variant="outlined"
            size="small"
            required={required}
          >
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
            <Select
              native
              label={label}
              id={id}
              name={name}
              {...renderProps}
              {...others}
            >
              <option value="Select">Select</option>
              {options.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            {errors[name] && (
              <FormHelperText error>{errors[name].message}</FormHelperText>
            )}
          </FormControl>
        );
      }}
      name={name}
      defaultValue="Select"
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate: allValidations,
        ...restRules
      }}
    />
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  rules: PropTypes.object,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

SelectField.defaultProps = {
  className: null,
  rules: {},
  required: false
};

export default SelectField;
