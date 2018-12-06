import { push, goBack } from 'connected-react-router'
import { put, takeEvery } from 'redux-saga/effects'
import {actions} from '../utils/types';

// Push Action Handler
export function* go(action) {
  yield put(push(action.payload))
}
  // Go back handler
export function* routeGoBack() {
  yield put(goBack())
}

export function* goBackSaga() {
  yield takeEvery(actions.GO_BACK, routeGoBack);
}

export function* pushSaga() {
    yield takeEvery(actions.GO_TO_ROUTE, go);
  }
