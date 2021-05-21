import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

const RadioField = props => {
  const { className, required, name, id, groupLabel, rules, options, row } =
    props;
  const { errors, control } = useFormContext();

  return (
    <Controller
      render={renderProps => {
        return (
          <FormControl
            className={className}
            fullWidth
            variant="outlined"
            size="small"
            required={required}
            component="fieldset"
          >
            {groupLabel && (
              <FormLabel component="legend">{groupLabel}</FormLabel>
            )}
            <RadioGroup id={id} row={row} {...renderProps}>
              {options.map(item => (
                <FormControlLabel
                  disabled={item.disabled}
                  value={item.value}
                  key={item.label}
                  control={<Radio />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
            {errors[name] && (
              <FormHelperText error>{errors[name].message}</FormHelperText>
            )}
          </FormControl>
        );
      }}
      name={name}
      control={control}
      defaultValue=""
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
  groupLabel: PropTypes.string,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  rules: PropTypes.object,
  row: PropTypes.bool,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

RadioField.defaultProps = {
  className: null,
  groupLabel: null,
  row: true,
  rules: {},
  required: false
};

export default RadioField;
