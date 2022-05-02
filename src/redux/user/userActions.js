import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

// Store users if the request is successful
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

// Store an error message in the request fails
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
// export all action creators from useractions.js to index.js

// NEXT: define the async action creators
// they should only return another function where side effects can occur
export const fetchUsers = () => {
    return (dispatch) => {
        
        // Before firing the api call, dispatch fetchUsersRequest, which will fist set loading to true
        dispatch(fetchUsersRequest());

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // response.data is an array of the data from the api
            const users = response.data
            // .map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message is the error description
            dispatch(fetchUsersFailure(error))
        })

    }
}