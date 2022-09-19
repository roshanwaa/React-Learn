import React, { useState } from 'react';
import { AddUsers } from './Components/Users/AddUsers';
import { UserList } from './Components/Users/UserList';
function App() {
  const [getUserList, setUserList] = useState([]);
  const onAddUsers = (uName, uAge) => {
    setUserList((prvUserList) => {
      return [
        ...prvUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <AddUsers onAddUsers={onAddUsers} />
      <UserList users={getUserList} />
    </React.Fragment>
  );
}

export default App;
