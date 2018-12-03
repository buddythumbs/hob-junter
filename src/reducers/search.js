
import { actions } from '../utils/types';

// use constant for initial state in order to reset if needed
const initialState = {
    searchText: '',
    loadingAutocomplete: false
}

const search = (state=initialState,action) => {
    switch (action.type) {
        case actions.SET_SEARCH:
            return state = { searchText: action.payload }
        case actions.CLEAR_SEARCH:
            return state = { searchText: '' }
        default:
            return state
    }
}

export default search;