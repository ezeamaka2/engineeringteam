import React from 'react'
import classes from "./SingleUser.module.css"

interface Props {
  id: number;
  key: number;
  image: string;
  name: string;
  role: string;
  removeUser: (id: number) => void;
}

const SingleUser: React.FC<Props> = ({id, image, name, role, removeUser}) => {

  const removeUserHandler = (id: number) => {
    removeUser(id)
  }
  return (
    <li className={classes.list}>
        <div className={classes.details}>
          <img src={image} alt={name}/>
          <div className={classes.info}>
            <p> Name: { name}</p>
            <p> Role: { role}</p>
          </div>
        </div>
        <button onClick={() => removeUserHandler(id)}>Remove</button>
    </li>
  )
}

export default SingleUser