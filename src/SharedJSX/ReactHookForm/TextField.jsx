import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { InputAdornment, TextField as MuiTextField } from '@mui/material';
import { VisibilityOffIcon, VisibilityOnIcon } from '../SVG';
import { IconButton } from '..';
import { typeValidation } from './helpers';

const TextField = props => {
  const {
    required = false,
    name,
    label = '',
    type = 'text',
    rules = {},
    sx = {},
    helperText = '',
    ...rest
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);
  const { validate, ...restRules } = rules;

  const allValidations = { ...typeValidation(type), ...validate };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const {
    formState: { errors },
    control
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field }) => (
        <MuiTextField
          autoComplete="off"
          error={!!errors[name]}
          fullWidth
          helperText={errors[name]?.message || helperText}
          InputProps={{
            endAdornment: type === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {!showPassword ? <VisibilityOffIcon /> : <VisibilityOnIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
          label={label}
          placeholder={label}
          required={required}
          size="small"
          sx={[...(Array.isArray(sx) ? sx : [sx])]}
          type={type === 'password' && showPassword ? 'text' : type}
          variant="outlined"
          {...field}
          {...rest}
        />
      )}
      rules={{
        required: { value: required, message: 'Required' },
        validate: allValidations,
        ...restRules
      }}
    />
  );
};

TextField.propTypes = {
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

export default TextField;
