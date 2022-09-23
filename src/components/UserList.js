import React from "react";

import "./userListItem.css";
import UserListItem from "./UserListItem";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      skip: 0,
      prevY: 0,
    };
  }
  componentDidMount() {
    const store = this.props.store;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(fetchUsers());

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const store = this.props.store;
      const skip = this.state.skip + 9;
      this.setState({ skip });
      store.dispatch(fetchUsers(skip));
    }
    this.setState({ prevY: y });
  }

  render() {
    const { users } = this.props.store.getState(); // { cars: [] }
    const { list, loading } = users;
    const loadingTextCSS = { display: loading ? "block" : "none" };

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
        {/* {loading && <div><h1>Loading...</h1></div>} */}
        <div
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
          style={styles.loadingCSS}
        >
          <span style={loadingTextCSS}><h1>Loading...</h1></span>
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
  loadingCSS: {
    height: "100px",
    margin: "30px",
  }
};

export default UserList;
