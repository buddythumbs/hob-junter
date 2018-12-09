import { call, put, takeLatest } from 'redux-saga/effects';
import {actions} from '../utils/types';
import {DAW_API} from '../api/data-at-work-api';

// worker Saga: will be fired on SET_SEARCH_TEXT action
function* fetchAutocomplete(action) {
    if(action.payload === "") return;
    yield put({type: actions.FETCH_KEYWORDS, payload: action.payload});
   try {
      const keywords = yield call(DAW_API.AUTOCOMPLETE, 'START',action.payload);
      yield put({type: actions.FETCH_KEYWORDS_SUCCEEDED, payload: keywords.data});
   } catch (e) {
      if(e.response){
        yield put({type: actions.FETCH_KEYWORDS_FAILED, payload: e.response.data.error.message});
      }else{
        yield put({type: actions.FETCH_KEYWORDS_FAILED, payload: e.message});
      }
   }
}

// worker Saga: will be fired on SET_SEARCH_TEXT action
function* fetchJobs(action) {
  if(action.payload === "") return;
  yield put({type: actions.FETCH_JOBS, payload: action.payload});
  try {
    const jobs = yield call(DAW_API.SEARCH_JOBS_BY_ID, action.payload);
    const related_skills = yield call(DAW_API.SEARCH_SKILLS_BY_JOB_ID, action.payload);
    yield put({ type: actions.FETCH_JOBS_SUCCEEDED, payload: {...jobs.data, ...related_skills.data}});
  } catch (e) {
    if(e.response){
      yield put({type: actions.FETCH_JOBS_FAILED, payload: e.response.data.error.message});
    }else{
      yield put({type: actions.FETCH_JOBS_FAILED, payload: e.message});
    }
  }
}
// Intercept SET_SEARCH_TEXT action type
export function* searchKeywordSaga() {
  yield takeLatest(actions.SET_SEARCH_TEXT, fetchAutocomplete);
}

// Intercept SET_SEARCH_JOB_ID action type
export function* searchJobSaga() {
  yield takeLatest(actions.SEARCH_JOB_ID, fetchJobs);
}
