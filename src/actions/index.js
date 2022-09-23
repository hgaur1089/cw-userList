import axios from 'axios';
export const ADD_USERS = 'ADD_USERS';

export function addUsers(users) {
    return {
        type: ADD_USERS,
        users,
    };
}

export function fetchUsers() {
    const url = 'https://reqres.in/api/users/';
    return function (dispatch) {
        return axios.get(url)
            .then(response => {
              console.log('response = ', response.data.data);
                dispatch(addUsers(response.data.data));
            })
            .catch(error => {
                throw (error);
            });
}
}
