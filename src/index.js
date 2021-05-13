import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './Global/theme';
import { store, persistor } from './store';
import Loading from './SharedJSX/Loading';
import App from './Widgets/Routing/components/App';
import ErrorBoundary from './ErrorBoudary';

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={<Loading open />} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CssBaseline />
            <App />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
