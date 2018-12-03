import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import SearchHomePage from './containers/SearchPage';
import JobPage from './containers/JobPage';

import { configureStore, history } from './store/configureStore';
import { createCustomTheme } from './utils/theme';
import './index.css';
import "typeface-nanum-gothic-coding";

// Create theme 
const muiTheme = createCustomTheme();

const store = configureStore()

class App extends Component {
  render() {
    return <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={muiTheme}>
          <Switch>
            <Route path="/" render={(props) => <SearchHomePage {...props}/>} />
            <Route path="/:jobId" render={(props) => <JobPage {...props}/>} />
          </Switch>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  }
}

export default App;
