import {
    GET_TODO_REQUEST,
    GET_TODO_REQUEST_FAIL,
    GET_TODO_REQUEST_SUCCESS,
} from "../constant/constatnt";

export const todoReducer = (state = { todoData: [] }, { type, payload }) => {
    switch (type) {
        case GET_TODO_REQUEST:
            return { isLoading: true };
        case GET_TODO_REQUEST_SUCCESS:
            return { isLoading: false, todoData: payload };
        case GET_TODO_REQUEST_FAIL:
            return { isLoading: false, error: payload };

        default:
            return state;
    }
};