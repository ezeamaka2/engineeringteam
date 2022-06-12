import React from 'react'
import SingleUser from './SingleUser';
import { User } from '../model/User';

import classes from "./ListUser.module.css"

interface Props {
    allUsers: User[];
    removeUser: (id: number) => void;
}

const ListUsers: React.FC<Props> = ({allUsers, removeUser}) => {
  return (
    <ul className={classes.ulList}>{allUsers.map((user) => <SingleUser 
        key={user.id} 
        id={user.id} 
        image={user.image} 
        name={user.name} 
        role={user.role} 
        removeUser ={removeUser}
        />)}</ul>
  )
}

export default ListUsers