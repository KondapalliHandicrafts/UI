import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import SnackBar from '../Components/SnackBar';
import themeCSS from './theme';

function renderSnackbar(apiResult) {
  ReactDOM.render(
    <MuiThemeProvider theme={themeCSS}>
      <SnackBar apiResult={apiResult} open />
    </MuiThemeProvider>,
    document.getElementById('snackbar')
  );
}

export default renderSnackbar;
