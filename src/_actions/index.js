// Actions
import {LOGGER_IN_USER} from '../_actionsType';

export const loggerInUser = user => dispatch => {
    return dispatch({
        type: LOGGER_IN_USER,
        payload: user
    })
}