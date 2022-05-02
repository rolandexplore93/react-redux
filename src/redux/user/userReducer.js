import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
        // If action.type is FETCH_USERS_REQUEST, set loading to true
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS:
        // If action.type is FETCH_USERS_SUCCESS, set loading to false, users to action.payload and error to empty string
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
    
            case FETCH_USERS_FAILURE:
            return {
        // If action.type is FETCH_USERS_FAILURE, set loading to false, users to empty array and error to action.payload

                loading: false,
                users: [],
                error: action.payload
            }
            
    
        default: return state
    }
}

export default reducer

//NEXT: Include userReducer in the combine reducer function
