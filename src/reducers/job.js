
import { actions } from '../utils/types';

// use constant for initial state in order to reset if needed
const initialState = {
    selectedJobId: '',
    selectedJob: undefined
}

export const search = (state=initialState,action) => {
    return switch (action.type) {
        case actions.SET_JOB_ID:
            return state = { selectedJobId: action.payload }
            break;
        case actions.SET_JOB:
            return state = { selectedJob: action.payload }
            break;
        default:
            return state
            break;
    }
}