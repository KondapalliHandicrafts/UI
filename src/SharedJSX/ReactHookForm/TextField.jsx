// @flow
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { VisibilityOffIcon, VisibilityOnIcon } from '__SHARED__/SVG';
import IconButton from '__SHARED__/IconButton';
import { typeValidation } from './_helpers';

const TextFieldKH = props => {
  const {
    required,
    name,
    id,
    type,
    label,
    rules,
    InputProps,
    className,
    ...others
  } = props;

  const { errors, control } = useFormContext();
  const { validate, ...restRules } = rules;
  const [show, setShow] = useState(false);
  const allValidations = { ...typeValidation(type), ...validate };

  return (
    <Controller
      render={renderProps => {
        return (
          <TextField
            fullWidth
            className={className}
            id={id}
            type={type && !show ? type : 'text'}
            autoComplete="off"
            label={label}
            helperText={errors[name]?.message}
            error={!!errors[name]}
            required={required}
            size="small"
            variant="outlined"
            InputProps={{
              endAdornment: type === 'password' && (
                <IconButton
                  onClick={() => setShow(!show)}
                  icon={!show ? <VisibilityOffIcon /> : <VisibilityOnIcon />}
                />
              ),
              ...InputProps
            }}
            {...renderProps}
            {...others}
          />
        );
      }}
      name={name}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate: allValidations,
        ...restRules
      }}
    />
  );
};

TextFieldKH.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  InputProps: PropTypes.object,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

TextFieldKH.defaultProps = {
  className: null,
  InputProps: {},
  required: false,
  rules: {},
  type: 'text'
};
export default TextFieldKH;
