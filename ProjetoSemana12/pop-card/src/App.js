import React from 'react';
import  Router  from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
   <ThemeProvider theme={theme}>
    <Router/> 
   </ThemeProvider>
  );
}

export default App;


