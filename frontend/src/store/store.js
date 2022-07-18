import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/userReducer";


const localLogin = localStorage.getItem("token")
    ? { login: JSON.parse(localStorage.getItem("token")) }
    : {}

const initialState = {
    user: localLogin
}

const rootReducer = combineReducers({
    user: userReducer,
    // todo: todoReducer
});
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;