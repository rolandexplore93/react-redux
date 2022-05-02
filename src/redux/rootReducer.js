import { combineReducers, createStore } from "redux";
import appleReducer from "./apple/appleReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import reducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    apple: appleReducer,
    user: reducer
})

export default rootReducer