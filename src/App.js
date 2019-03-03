import React, { Component } from 'react';
import './App.css';
import NavBar from './global/components/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './global/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar></NavBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
