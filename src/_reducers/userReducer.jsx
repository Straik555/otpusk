//ACTIONS
import {LOGGER_IN_USER, LOGOUT} from "../_actionsType";

const initialState = {
    user: {},
    isLogin: false,
    isLoading: false,
    error: null
}

const userReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case LOGGER_IN_USER:
            return {
                user: payload,
                isLogin: true,
                isLoading: false,
                error: null
            }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}

export default userReducer;