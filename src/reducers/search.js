
import { actions } from '../utils/types';

// use constant for initial state in order to reset if needed
const initialState = {
    searchText: '',
    loadingAutocomplete: false
}

const search = (state=initialState,action) => {
    switch (action.type) {
        case actions.SET_SEARCH_TEXT:
            return state = { ...state, searchText: action.payload }
        case actions.CLEAR_SEARCH:
            return state = { ...state, searchText: '' }
        case actions.FETCH_KEYWORDS:
            return state = { ...state, loadingAutocomplete: true }
        case actions.FETCH_KEYWORDS_SUCCEEDED:
            return state = { ...state, searchResults: action.payload, loadingAutocomplete: false }
        case actions.FETCH_JOBS:
            return state = { ...state, fetchedJob: undefined, fetchedJob: false }
        case actions.FETCH_JOBS_SUCCEEDED:
            return state = { ...state, fetchedJobDetail: action.payload, fetchedJob: true }
        default:
            return state
    }
}

export default search;