import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// Reducers
import rootReducer from '../reducers';

// Actions
import * as searchActions from '../actions/search';

// Sagas
import {searchKeywordSaga,searchJobSaga} from '../sagas/searchSaga';
import {goBackSaga, pushSaga} from '../sagas/routerSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// For conneted router
export const history = createBrowserHistory()

// Logger setup

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export const configureStore = () => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(thunk);

  // Redux DevTools Configuration
  const actionCreators = {
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

  // Run sagas
  sagaMiddleware.run(searchKeywordSaga)
  sagaMiddleware.run(searchJobSaga)
  sagaMiddleware.run(goBackSaga)
  sagaMiddleware.run(pushSaga)

  return store;
};