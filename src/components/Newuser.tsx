import React, {useState} from 'react'
import { User } from '../model/User';
import classes from "./Newuser.module.css";

interface Props {
    addNewUser: (user: User) => void;
}


const Newuser: React.FC<Props> = ({addNewUser}) => {
    const [user, setUser] = useState<{name: string, role: string}>({name: "", role:""})

    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const newuser = await fetch(`https://api.github.com/users/${user.name}`)

        const data = await newuser.json();

        if(user.name === "" || user.role === ""){
            alert("Enter username and Assign role to the user")
            return;
        }

        if(data.name === null || data.name === undefined) {
            alert("Could not fetch user, try a valid username");
            return;
        }
        const userdata = {
            id: Math.random(),
            image: data.avatar_url,
            name: data.name,
            role: user.role
        }

        addNewUser(userdata)
        setUser({name: "", role: ""})
    }
  return (
    <form onSubmit={handleForm} className={classes.form}>
        <label className={classes.usename} htmlFor='username'>Enter Github User name</label>
        <input type="text" value={user.name} placeholder="Enter a github username" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label htmlFor='role'>Assign A Role</label>
        <input className={classes.role} type="text" value={user.role} placeholder="Assign a role" onChange={(e) => setUser({...user, role: e.target.value})}/>
        <div className={classes.btn}>
            <button>Submit</button>
        </div>
    </form>
  )
}

export default Newuser