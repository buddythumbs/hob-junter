import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import search from './search';
import job from './job';

const rootReducer = combineReducers({
    // reducers go here
    search,
    job,
    router
});

export default rootReducer;