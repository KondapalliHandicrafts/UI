// @flow
import React from 'react';
import type { Node } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import type { fileUploadType } from '__GLOBAL__/Types';
import { maxSizeMB } from './_helpers';
import styles from './styles.css';

const FileUploadField = (props: fileUploadType): Node => {
  const { required, name, id, rules, multiple, accept, maxSize } = props;
  const { errors, control, trigger } = useFormContext();
  const classes = styles({ ...props, errors });

  return (
    <Controller
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
              style={{ display: 'none' }}
              inputRef={ref}
              type="file"
              onChange={e => {
                onChange(multiple ? e.target.files : e.target.files[0]);
                trigger(name);
              }}
              inputProps={{
                tabIndex: '-1',
                autoComplete: 'off',
                multiple,
                accept
              }}
              required={required}
            />
            <p className={classes.fileUploadContainer}>
              Drag &lsquo;n&rsquo; drop some files here, or click to select
              files
            </p>
            {errors[name] && (
              <FormHelperText error>{errors[name].message}</FormHelperText>
            )}
          </Grid>
        );
      }}
      name={name}
      control={control}
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

FileUploadField.defaultProps = {
  required: false,
  maxSize: 1024 * 1034 * 1, // 1MB
  multiple: false,
  rules: ({}: any)
};
export default FileUploadField;
