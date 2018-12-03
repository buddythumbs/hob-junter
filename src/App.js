import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Switch, Route, withRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Custom theme
import { createCustomTheme } from './utils/theme';
import './index.css';
import "typeface-nanum-gothic-coding";

// Create theme 
const muiTheme = createCustomTheme();

console.log(muiTheme);

class App extends Component {
  render() {
    return <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={muiTheme}>
          <Switch>
            <Route path="/" render={(props) => <SearchHomePage {...props}/>} />
            <Route path="/:jobId" render={(props) =>  {...props}/>} />
          </Switch>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  }
}

export default App;
