import {
    USER_REQUEST,
    USER_REQUEST_FAIL,
    USER_REQUEST_SUCCESS,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_REQUEST_SUCCESS,
    USER_SIGNIN_REQUEST_FAIL,
    USER_LOGOUT
} from "../constant/userConstant"


export const userReducer = (
    state = { userDetails: [] },
    { type, payload }) => {
    switch (type) {
        case USER_REQUEST: return { isLoading: true }
        case USER_REQUEST_SUCCESS: return { isLoading: false, userDetails: payload }
        case USER_REQUEST_FAIL: return { isLoading: false, error: payload }

        case USER_SIGNIN_REQUEST: return { isLoading: true }
        case USER_SIGNIN_REQUEST_SUCCESS: return { login: payload, isLoading: false }

        case USER_SIGNIN_REQUEST_FAIL: return { error: payload, isLoading: false }

        case USER_LOGOUT: return { userDetails: [] }

        default: return state



    }
}
