import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import Grid from '@material-ui/core/Grid';
import RootRef from '@material-ui/core/RootRef';
import FormHelperText from '@material-ui/core/FormHelperText';
import { maxSizeMB } from './_helpers';
import styles from './styles.css';

const FileUploadField = props => {
  const {
    required,
    className,
    name,
    rules,
    multiple,
    gridStyle,
    displayImage,
    accept,
    maxSize,
    message,
    onChange,
    defaultValue
  } = props;
  const { setValue, errors, control } = useFormContext();
  const classes = styles({ ...props, errors });

  const [rfiles, setRejectedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: useCallback(
      (acceptedFiles, rejectedFiles) => {
        setRejectedFiles(rejectedFiles);
        setValue(name, acceptedFiles, { shouldValidate: true });
        onChange(acceptedFiles);
      },
      [setValue, onChange, name]
    ),
    accept,
    multiple,
    maxSize
  });
  const { ref, ...rootProps } = getRootProps();

  return (
    <Controller
      defaultValue={defaultValue}
      render={() => {
        return (
          <RootRef rootRef={ref}>
            <Grid className={gridStyle} {...rootProps}>
              <input required={required} {...getInputProps()} />
              {displayImage}
              <p className={classNames(classes.fileUploadContainer, className)}>
                {message}
              </p>
              {errors[name] && (
                <FormHelperText error>{errors[name].message}</FormHelperText>
              )}
            </Grid>
          </RootRef>
        );
      }}
      name={name}
      control={control}
      rules={{
        required: { value: required, message: 'Required' },
        validate: {
          accept: () =>
            rfiles.every(item => accept.split(',').includes(item.file.type)) ||
            `Only images with type ${accept} is accepted`,
          maxSize: () =>
            rfiles.every(item => item.file.size <= maxSize) ||
            `file should be less than ${maxSizeMB(maxSize)}MB`
        },
        ...rules
      }}
    />
  );
};

FileUploadField.propTypes = {
  accept: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  displayImage: PropTypes.node,
  id: PropTypes.string.isRequired,
  gridStyle: PropTypes.string,
  onChange: PropTypes.func,
  rules: PropTypes.object,
  required: PropTypes.bool,
  maxSize: PropTypes.number,
  message: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired
};

FileUploadField.defaultProps = {
  className: null,
  defaultValue: null,
  displayImage: null,
  gridStyle: null,
  onChange: null,
  required: false,
  maxSize: 1024 * 1024 * 1, // 1MB
  message: "Drag '&' drop some files here or click to select files",
  multiple: false,
  rules: {}
};
export default FileUploadField;

//   <FileUploadField
//     accept="image/png, image/jpg, image/jpeg, image/gif"
//     name="file alt text"
//     label="File Upload"
//   />
