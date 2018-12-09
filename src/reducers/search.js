
import { actions } from '../utils/types';

// use constant for initial state in order to reset if needed
const initialState = {
    searchText: '',
    loadingAutocomplete: false,
    fetchedJob: false,
}

const search = (state=initialState,action) => {
    switch (action.type) {
        case actions.SET_SEARCH_TEXT:
            return state = { ...state, searchText: action.payload }
        case actions.SEARCH_JOB_TITLE:
            return state = { ...state, searchTitle: action.payload }
        case actions.CLEAR_SEARCH:
            return state = { ...state, searchText: '', searchResults: [] }
        case actions.FETCH_KEYWORDS:
            return state = { 
                ...state, 
                loadingAutocomplete: true,
                errorMessage: '', 
                error: false 
            }
        case actions.FETCH_KEYWORDS_SUCCEEDED:
            return state = { 
                ...state, 
                searchResults: action.payload, 
                loadingAutocomplete: false 
            }
        case actions.FETCH_KEYWORDS_FAILED:
            return state = { 
                ...state, 
                loadingAutocomplete: false, 
                errorMessage: action.payload, 
                error: true ,
                searchResults: undefined
            }
        case actions.FETCH_JOBS:
            return state = { 
                ...state, 
                fetchedJob: false, 
                fetchingJob: true, 
                errorMessage: '', 
                error: false 
            }
        case actions.FETCH_JOBS_FAILED:
            return state = { 
                ...state, 
                fetchedJob: false, 
                fetchingJob: false, 
                errorMessage: action.payload, 
                error: true 
            }
        case actions.FETCH_JOBS_SUCCEEDED:
            return state = { 
                ...state, 
                fetchedJobDetail: action.payload, 
                fetchedJob: true, 
                fetchingJob: false
            }   
        default:
            return state
    }
}

export default search;