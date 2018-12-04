import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import { configureStore, history } from './store/configureStore';
import { createCustomTheme } from './utils/theme';

// Container
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import JobPage from './containers/JobPage';
import LayoutPage from './containers/LayoutPage';
import ContactPage from './containers/ContactPage';
import AboutPage from './containers/AboutPage';

// Styles
import './index.css';
import "typeface-nanum-gothic-coding";

// Globals styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({})
const muiTheme = createCustomTheme({
  paletteType: 'dark',
});
console.log(muiTheme);

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
                <Route path="/about" render={(props) => <AboutPage {...props}/>} />
                <Route path="/contact" render={(props) => <ContactPage {...props}/>} />
                <Route path="/search/:jobId" render={(props) => <JobPage {...props}/>} />
                <Route path="/search/" render={(props) => <SearchPage {...props}/>} />
                <Route path="/" render={(props) => <HomePage {...props}/>} />
              </Switch>
            </LayoutPage>
          </Fragment>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  }
}

export default withStyles(styles, { withTheme: true })(App);
