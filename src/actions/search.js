import { actions } from '../utils/types';

export const searchText = (text) => ({
    type: actions.SEARCH_TEXT,
    payload: text
})

export const setSearchText = (text) => ({
    type: actions.SET_SEARCH_TEXT,
    payload: text
})

export const clearSearchText = () => ({
    type: actions.CLEAR_SEARCH,
})