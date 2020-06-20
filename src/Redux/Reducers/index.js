import { combineReducers } from "redux";
import Reducers from "./reducers";

const rootReducer = combineReducers({
    cart: Reducers,
});

export default rootReducer;
