import { actions } from '../utils/types';

export const sendContact = dispatch => {
    dispatch({
        type: actions.SEND_CONTACT
    })
}