
import { actions } from '../utils/types';

// use constant for initial state in order to reset if needed
const initialState = {
    selectedJobId: '',
    selectedJob: undefined
}

const job = (state=initialState,action) => {
    switch (action.type) {
        case actions.SET_JOB_ID:
            return state = { selectedJobId: action.payload }
        case actions.SET_JOB:
            return state = { selectedJob: action.payload }
        default:
            return state
    }
}

export default job;