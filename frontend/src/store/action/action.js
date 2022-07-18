import axios from "axios";
import {
    GET_TODO_REQUEST,
    GET_TODO_REQUEST_FAIL,
    GET_TODO_REQUEST_SUCCESS,
} from "../constant/constatnt";

export const getAllTodoAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TODO_REQUEST });

        dispatch({ type: GET_TODO_REQUEST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_TODO_REQUEST_FAIL, payload: error });
    }
};