import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
// If you are using date-fns v3.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './Global/theme';
import { persistor, store } from './store';
import Loading from './SharedJSX/Loading';
import App from './Widgets/Routing';

const ele = document.getElementById('root');
const root = createRoot(ele);

root.render(
  <Provider store={store}>
    <PersistGate loading={<Loading open />} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
