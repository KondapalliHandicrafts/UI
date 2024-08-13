import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { read, utils } from 'xlsx';
import IconButton from './IconButton';
import { UploadIcon } from './SVG';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const styles = {
  minWidth: {
    minWidth: 'auto',
    p: 0,
    fontSize: '1.5rem'
  },
  disabled: {
    color: 'colors.disabled'
  }
};

const CSVToArray = (strData, strDelimiter) => {
  // Create a regular expression to parse the CSV values.
  const objPattern = new RegExp(
    // Delimiters.
    '(\\' +
      strDelimiter +
      '|\\r?\\n|\\r|^)' +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      '\\r\\n]*))',
    'gi'
  );

  // Create an array to hold our data. Give the array
  // a default empty first row.
  const arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  let arrMatches = objPattern.exec(strData);

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches) {
    // Get the delimiter that was found.
    const strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    let strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(/""/g, '"');
    } else {
      // We found a non-quoted value.
      // eslint-disable-next-line prefer-destructuring
      strMatchedValue = arrMatches[3];
    }

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
    arrMatches = objPattern.exec(strData);
  }

  // Return the parsed data.
  return arrData;
};

const FileUploadButton = props => {
  const {
    sx = {},
    label,
    isDisabled = false,
    buttonProps,
    delimiter = ',',
    accept,
    onChange
  } = props;

  const readFile = e => {
    const ext = e.target.files[0]?.name.split('.')[1];
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      if (['xlsx', 'xls'].includes(ext)) {
        const wb = read(event.target.result);
        const ws = wb.Sheets(wb.SheetNames[0]);
        const data = utils.sheet_to_json(ws);
        onChange(data);
        // eslint-disable-next-line no-param-reassign
        e.target.value = '';
      } else if (ext === 'csv') {
        const decoder = new TextDecoder();
        const str = decoder.decode(event.target.result);
        const data = CSVToArray(str, delimiter);
        onChange(data);
      }
    });
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  return (
    <IconButton
      color="primary"
      component="label"
      disabled={isDisabled}
      disableRipple
      label={label}
      sx={[
        styles.minWidth,
        isDisabled && styles.disabled,
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      tabIndex={-1}
      variant="text"
      {...buttonProps}
    >
      <UploadIcon />
      <VisuallyHiddenInput
        accept={accept}
        onChange={e => readFile(e)}
        type="file"
      />
    </IconButton>
  );
};

FileUploadButton.propTypes = {
  accept: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  delimiter: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default FileUploadButton;
