// @flow
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import SnackBar from '../SharedJSX/SnackBar';
import themeCSS from './theme';
import type { apiResultType } from './Types';

function renderSnackbar(apiResult: apiResultType) {
  ReactDOM.render(
    <MuiThemeProvider theme={themeCSS}>
      <SnackBar apiResult={apiResult} open />
    </MuiThemeProvider>,
    document.getElementById('snackbar')
  );
}

export default renderSnackbar;
