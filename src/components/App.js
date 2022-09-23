import UserList from './UserList';

function App(props) {
  const users = props.store.getState();
  return (
    <div>
      <UserList users={users} store={props.store}/>
    </div>
  );
}

export default App;
