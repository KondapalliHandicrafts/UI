import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#F4A460' },
    secondary: { main: '#FF7F50' },
    error: { main: '#BA0C2F' }
  },
  colors: {
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
    black5: 'rgba(0, 0, 0, 0.5)',
    black2: 'rgba(0, 0, 0, 0.2)',
    success: '#4caf50',
    error: '#BA0C2F',
    favourite: '#ff4343',
    buttonColor: '#F4A460',
    buttonColor2: '#DEB887',
    textColor: '#505050',
    tableBackgroundGray: 'rgba(0, 0, 0, 0.04);'
  },
  typography: {
    // useNextVariants: true
    // htmlFontSize: 10
  }
});

export default theme;
