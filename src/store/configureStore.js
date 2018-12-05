import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// Reducers
import rootReducer from '../reducers';

// Actions
import * as jobActions from '../actions/job';
import * as searchActions from '../actions/search';

// Sagas
import searchSaga from '../sagas/searchSaga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

export const configureStore = () => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);

  // Redux DevTools Configuration
  const actionCreators = {
    ...jobActions,
    ...searchActions,
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const store = createStore(
    rootReducer(history),
    composeEnhancer(
      applyMiddleware(
        logger,
        sagaMiddleware,
        routerMiddleware(history),
      ),
    ),
  )

  // then run the saga
  sagaMiddleware.run(searchSaga)

  return store;
};