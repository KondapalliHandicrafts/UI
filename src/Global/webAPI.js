import axios from 'axios';
import { commonLoader, commonSnackbar } from '../Widgets/Routing/routingSlice';
import { store } from '../store';

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ||
    (process.env.NODE_ENV === 'development' && process.env.API_URL === 'prod')
      ? 'https://kondapalli-handicrafts.herokuapp.com/'
      : 'http://localhost:3000'
});

const thenRederSnackbar = (showSnack, res) => {
  if (showSnack) store.dispatch(commonSnackbar(res.data));
  return res;
};

const catchRenderSnackbar = err => {
  if (err && err.response?.status === 401) {
    store.dispatch(
      commonSnackbar(
        err.response.data || { message: err.response.statusText, status: 500 }
      )
    );
  } else {
    store.dispatch(commonSnackbar({ message: err.message, status: 500 }));
  }
  store.dispatch(commonLoader(false));
  throw new Error(err);
};

export const getCall = async ({ instance = axiosInstance, url, headers }) => {
  return instance
    .get(url, {
      headers: {
        Authorization: store.getState().login.jwtToken,
        ...headers
      }
    })
    .then(res => res)
    .catch(err => catchRenderSnackbar(err));
};

export const postCall = async ({
  instance = axiosInstance,
  url,
  body,
  showSnack = true,
  headers
}) => {
  return instance
    .post(url, body, {
      headers: {
        Authorization: store.getState().login.jwtToken,
        ...headers
      }
    })
    .then(res => thenRederSnackbar(showSnack, res))
    .catch(err => catchRenderSnackbar(err));
};

export const deleteCall = ({
  instance = axiosInstance,
  url,
  showSnack = true,
  headers
}) =>
  instance
    .delete(url, {
      headers: {
        Authorization: store.getState().login.jwtToken,
        ...headers
      }
    })
    .then(res => thenRederSnackbar(showSnack, res))
    .catch(err => catchRenderSnackbar(err));

export const putCall = ({
  instance = axiosInstance,
  url,
  body,
  showSnack = true,
  headers
}) =>
  instance
    .put(url, body, {
      headers: {
        Authorization: store.getState().login.jwtToken,
        ...headers
      }
    })
    .then(res => thenRederSnackbar(showSnack, res))
    .catch(err => catchRenderSnackbar(err));

export default axiosInstance;
