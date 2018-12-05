import { call, put, takeLatest } from 'redux-saga/effects';
import {actions} from '../utils/types';
import {memoize} from '../utils/memoize';
import {DAW_API} from '../api/data-at-work-api';

const getBeginsWith = memoize(DAW_API.AUTOCOMPLETE)

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAutocomplete(action) {
    yield put({type: actions.FETCH_KEYWORDS, payload: action.payload});
   try {
      const keywords = yield call(DAW_API.AUTOCOMPLETE, 'START',action.payload);
      yield put({type: actions.FETCH_KEYWORDS_SUCCEEDED, payload: keywords.data});
   } catch (e) {
      yield put({type: actions.FETCH_KEYWORDS_FAILED, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* searchSaga() {
    console.log();
    
  yield takeLatest(actions.SET_SEARCH_TEXT, fetchAutocomplete);
}

export default searchSaga;