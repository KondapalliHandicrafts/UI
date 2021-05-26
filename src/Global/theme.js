import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import RobotoRegular from '../Assets/Fonts/Roboto-Regular.ttf';
import RobotoLight from '../Assets/Fonts/Roboto-Light.ttf';
import RobotoMedium from '../Assets/Fonts/Roboto-Medium.ttf';

const robotoRegular = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `url(${RobotoRegular}) format('truetype')`
};
const robotoMedium = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 500,
  fontDisplay: 'swap',
  src: `url(${RobotoMedium}) format('truetype')`
};
const robotoLight = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 300,
  fontDisplay: 'swap',
  src: `url(${RobotoLight}) format('truetype')`
};

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [robotoLight, robotoMedium, robotoRegular]
      }
    }
  },
  palette: {
    primary: { main: '#F4A460' },
    secondary: { main: '#4caf50' },
    error: { main: '#BA0C2F' }
  },
  colors: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    black5: 'rgba(0, 0, 0, 0.5)',
    black2: 'rgba(0, 0, 0, 0.2)',
    iconColor: 'rgba(0,0,0,0.75)',
    success: '#4caf50',
    error: '#BA0C2F',
    favourite: '#ff4343',
    buttonColor: '#F4A460',
    buttonColor2: '#DEB887',
    textColor: '#505050',
    tableBackgroundGray: 'rgba(0, 0, 0, 0.04);'
  },
  typography: {
    htmlFontSize: 10
  }
});

export default responsiveFontSizes(theme);
