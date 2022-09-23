import { combineReducers } from "redux";
import { ADD_USERS } from "../actions";

const initialUsersState = {
  list: [],
};
export function users(state = initialUsersState, action) {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        list: action.users,
      };
    default:
      return state;
  }
}

// const initialRootState = {
//   users: initialUsersState,
// };

export default combineReducers({
  users,
});
