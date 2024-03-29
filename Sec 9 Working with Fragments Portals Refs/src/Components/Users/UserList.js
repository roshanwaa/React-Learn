import React from 'react';
import { Card } from '../UI/Card';
import Classes from './UsersList.module.css';
export const UserList = (props) => {
  return (
    <Card className={Classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
