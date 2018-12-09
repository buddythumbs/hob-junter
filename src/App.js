import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { configureStore, history } from './store/configureStore';
import { createCustomTheme } from './utils/theme';

// Container
import SearchPage from './containers/SearchPage';
import JobPage from './containers/JobPage';
import LayoutPage from './containers/LayoutPage';

// Styles
import './index.css';
import "typeface-nanum-gothic-coding";

const muiTheme = createCustomTheme({
  paletteType: 'dark',
});

// Redux store
const store = configureStore()

class App extends Component {
  render() {
    return <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={muiTheme}>
          <Fragment>
            <CssBaseline/>
            <LayoutPage>
              <Switch>
                <Route path="/jobs/:jobId" render={(props) => <JobPage {...props}/>} />
                <Route path="/" render={(props) => <SearchPage {...props}/>} />
              </Switch>
            </LayoutPage>
          </Fragment>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  }
}

export default App;
