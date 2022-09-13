import React from 'react';
import { AddUsers } from './Components/Users/AddUsers';
import { UserList } from './Components/Users/UserList';
function App() {
  return (
    <div>
      <h1>Hello Roshan</h1>
      <AddUsers />
      <UserList users={[]} />
    </div>
  );
}

export default App;
