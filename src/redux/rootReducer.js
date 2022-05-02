import { combineReducers, createStore } from "redux";
import appleReducer from "./apple/appleReducer";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    apple: appleReducer
})

export default rootReducer