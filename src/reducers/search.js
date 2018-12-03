
import { actions } from '../utils/types';

// use constant for initial state in order to reset if needed
const initialState = {
    searchText: '',
    loadingAutocomplete: false
}

export const search = (state=initialState,action) => {
    return switch (action.type) {
        case actions.SET_SEARCH:
            return state = { searchText: action.payload }
            break;
        case actions.CLEAR_SEARCH:
            return state = { searchText: '' }
            break;
        default:
            return state
            break;
    }
}