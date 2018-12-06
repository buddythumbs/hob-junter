import { actions } from '../utils/types';

export const goTo = (route) => ({
    type: actions.GO_TO_ROUTE,
    payload: route
})

export const goBack = () => ({
    type: actions.GO_BACK,
})