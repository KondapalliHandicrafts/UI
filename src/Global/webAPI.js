// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SnackbarAPI from '../SharedJSX/SnackbarAPI';
import ThemeCSS from './theme';
import { store } from '../store';
import type { apiResultType, postType, getType } from './Types';

const axiosAPI = (axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
}): any);

export const renderAPIResult = (
  apiPostResult: apiResultType,
  status: number
): function => {
  ReactDOM.render(
    <MuiThemeProvider theme={ThemeCSS}>
      <SnackbarAPI apiResult={apiPostResult} open status={status} />
    </MuiThemeProvider>,
    document.getElementById('snackbar')
  );
  return apiPostResult;
};

export const post = ({ url, inputs, showSnack, headers }: postType): function =>
  axiosAPI
    .post(url, inputs, {
      headers: {
        Authorization: store.getState().loginReducer.token,
        ...headers
      }
    })
    .then(res => {
      if (showSnack) return renderAPIResult(res.data, res.status);
      return res.data;
    })
    .catch(err => {
      if (err.response) {
        renderAPIResult(err.response.data, err.response.status);
        throw new Error(err);
      }
      return err.response.data;
    });

export const get = ({ url, headers }: getType): function =>
  axiosAPI
    .get(url, {
      headers: {
        Authorization: store.getState().loginReducer.token,
        ...headers
      }
    })
    .then(res => res.data)
    .catch(err => {
      throw new Error(err);
    });

export default axiosAPI;
