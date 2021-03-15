// @flow
import React from 'react';
import type { Node } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import type { selectFieldType } from '__GLOBAL__/Types';

const SelectField = (props: selectFieldType): Node => {
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
                <option key={item.toString()} value={item}>
                  {item.toString()}
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
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate: {
          reqired: value =>
            required ? value !== 'Select' || 'Required' : true,
          ...validate
        },
        ...restRules
      }}
    />
  );
};

SelectField.defaultProps = {
  className: null,
  rules: ({}: any),
  required: false
};

export default SelectField;
