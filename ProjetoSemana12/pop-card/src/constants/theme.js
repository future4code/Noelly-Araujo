import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor, secundaryColor}  from '../constants/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white'
     
    },
   text: {
       secundary: secundaryColor,
   }
  },
});


export default theme;