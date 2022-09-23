import { combineReducers } from "redux";
import { ADD_USERS, SET_LOADING } from "../actions";

const initialUsersState = {
  list: [],
  loading: false,
};
export function users(state = initialUsersState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_USERS:
      return {
        ...state,
        loading: false,
        list: [ ...state.list ,...action.users],
      };
    default:
      return state;
  }
}

export default combineReducers({
  users,
});
