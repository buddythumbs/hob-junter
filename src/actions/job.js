import { actions } from '../utils/types';

export const searchText = dispatch => {
    dispatch({
        type: actions.SET_SEARCH
    })
}