// Actions
import {LOGGER_IN_USER, LOGOUT} from '../_actionsType';

export const loggerInUser = (email, token) => dispatch => {
    return dispatch({
        type: LOGGER_IN_USER,
        payload: {
            email,
            token
        }
    })
}

export const userLogOut = () => dispatch => {
    localStorage.removeItem('otpuskToken')
    dispatch({
        type: LOGOUT,
        payload: {}
    });
}