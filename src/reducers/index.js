import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import search from './search';
import job from './job';

export default (history)  => combineReducers({
    router: connectRouter(history),
    search,
    job,
});