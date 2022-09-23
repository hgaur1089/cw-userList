import React from "react";

import "./userListItem.css";
import UserListItem from "./UserListItem";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const store = this.props.store;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(fetchUsers());
  }

  render() {
    const { users } = this.props.store.getState(); // { cars: [] }
    const { list } = users;
    return (
      <div style={styles.container}>
        <div style={styles.heading}>
          <h1>User List</h1>
        </div>
        <div style={styles.userList}>
          {list.map((user, index) => (
            <UserListItem user={user} key={`user-${index}`} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  heading: {
    textAlign: "center",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  userList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "38px 20px",
    padding: " 0 2em",
    width: "100%",
    maxWidth: "1000px",
  },
};

export default UserList;
