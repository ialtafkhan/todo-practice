import axios from "axios";
import {
    USER_LOGOUT,
    USER_REQUEST,
    USER_REQUEST_FAIL,
    USER_REQUEST_SUCCESS,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_REQUEST_FAIL,
    USER_SIGNIN_REQUEST_SUCCESS,
} from "../constant/userConstant";

export const signUpAction = (formData) => async (dispatch) => {
    try {
        dispatch({ type: USER_REQUEST });
        console.log(formData);
        const { data } = await axios.post("http://localhost:4500/api/user/signup", formData)
        console.log(formData);
        dispatch({ type: USER_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_REQUEST_FAIL, payload: error });
    }
};
export const signInAction = formData => async (dispatch) => {
    try {
        dispatch({ type: USER_SIGNIN_REQUEST });

        const { data } = await axios.post("http://localhost:4500/api/user/signin", formData)
        dispatch({
            type: USER_SIGNIN_REQUEST_SUCCESS, payload: {
                token: data.token
            }
        });
        localStorage.setItem("token", JSON.stringify(data.token))
    } catch (error) {
        dispatch({ type: USER_SIGNIN_REQUEST_FAIL, payload: error });
    }
};



export const lOgoutAction = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem("token")
};