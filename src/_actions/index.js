// Actions
import {LOGGER_IN_USER} from '../_actionsType';

export const loggerInUser = (email, token) => dispatch => {
    return dispatch({
        type: LOGGER_IN_USER,
        payload: {
            email,
            token
        }
    })
}