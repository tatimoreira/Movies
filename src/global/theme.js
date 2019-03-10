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
        color: 'white',
        textTransform: 'none',
        flexGrow: 1
      }
    },
    MuiDialog : {
      paper: {
        backgroundColor: '#2B2C3B',
      }
    },
    MuiFormControl: {
      root:{
        backgroundColor: '#3E3F52',
      },
    },
    MuiInputLabel: {
      root:{
        color: '#808080'
      }
    },
    MuiInputBase : {
      root:{
        color: '#808080'
      }
    },
    MuiFormLabel: {
      root:{
        color: '#808080'
      },
    },
    MuiDialogTitle: {
      root:{
        marginLeft: '30%'
      },
    },
  }
});