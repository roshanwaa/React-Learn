import React from 'react';
import { Card } from '../UI/Card';
import Classes from './UsersList.module.css';
export const UserList = (props) => {
  return (
    <Card className={Classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} <br /> ({user.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
