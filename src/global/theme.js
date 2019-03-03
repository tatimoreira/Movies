import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';


export default createMuiTheme({
  palette: {
    primary: {
      main: '#2B2C3B',
    },
    secondary: indigo 
  },
  typography: {
    fontSize: 20,
    color: 'white',
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      root: {
        color: '#2E74C4',
        textTransform: 'none',
        flexGrow: 1
      }
    }
  }
});