import { BUY_APPLE } from "./appleType"

const initialState = {
    numOfApple: 50
}

const appleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_APPLE: return {
            ...state,
            numOfApple: state.numOfApple - action.payload
        }
            
    
        default: return state
    }
}

export default appleReducer