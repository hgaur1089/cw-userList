import axios from "axios";
export const ADD_USERS = "ADD_USERS";
export const SET_LOADING = "SET_LOADING";

export function addUsers(users) {
  return {
    type: ADD_USERS,
    users,
  };
}

export function fetchUsers(skipNo = 0) {
  // const url = 'https://reqres.in/api/users/';
  const url = `https://dummyjson.com/users?limit=9&skip=${skipNo}`;
  return function (dispatch) {
    dispatch(setLoading());
    return axios
      .get(url)
      .then((response) => {
        console.log("response = ", response.data.users);
        dispatch(setLoading(false));
        dispatch(addUsers(response.data.users));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
