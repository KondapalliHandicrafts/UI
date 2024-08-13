import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, Grid, TextField } from '@mui/material';
import { maxSizeMB } from './_helpers';

const styles = {
  fileUploadContainer: {
    border: '1px solid',
    padding: '2rem 1rem',
    cursor: 'pointer',
    color: props =>
      props.errors && props.errors[props.name]
        ? 'colors.error'
        : 'colors.black',
    borderColor: props =>
      props.errors && props.errors[props.name]
        ? 'colors.error'
        : 'colors.black2',
    borderRadius: '5px',
    width: '100%',
    textAlign: 'center'
  }
};

const FileUploadField = props => {
  const {
    required = false,
    name,
    id,
    rules = {},
    multiple = false,
    accept,
    maxSize = 1024 * 1034 * 1 // 1MB
  } = props;
  const { errors, control, trigger } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ onChange, ref }) => {
        return (
          <Grid
            onClick={() => {
              ref.current.click();
              trigger(name);
            }}
          >
            <TextField
              id={id}
              inputProps={{
                tabIndex: '-1',
                autoComplete: 'off',
                multiple,
                accept
              }}
              inputRef={ref}
              onChange={e => {
                onChange(multiple ? e.target.files : e.target.files[0]);
                trigger(name);
              }}
              required={required}
              style={{ display: 'none' }}
              type="file"
            />
            <Grid component="p" sx={styles.fileUploadContainer}>
              Drag &lsquo;n&rsquo; drop some files here, or click to select
              files
            </Grid>
            {errors[name] ? (
              <FormHelperText error>{errors[name].message}</FormHelperText>
            ) : null}
          </Grid>
        );
      }}
      rules={{
        required: { value: required, message: 'Required' },
        validate: {
          accept: value =>
            value.type === accept ||
            `Only images with type ${accept} is accepted`,
          maxSize: value =>
            value.size <= maxSize ||
            `file should be less than ${maxSizeMB(maxSize)}MB`
        },
        ...rules
      }}
    />
  );
};

FileUploadField.propTypes = {
  accept: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  maxSize: PropTypes.number,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  rules: PropTypes.object
};

export default FileUploadField;
