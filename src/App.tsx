import React, {useState} from 'react';
import Newuser from './components/Newuser';
import ListUsers from './components/ListUsers';
import './App.css';

import { User } from './model/User';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers([...users, user])
  }

  const removerUser = (id: number) => {
    setUsers([...users.filter(user => user.id !== id)]);
  }
  
  return (
    <div className="App">
      <span className='heading'>Create Your Engineering Team</span>
      <Newuser addNewUser={addUser}/>
      <ListUsers allUsers={users} removeUser={removerUser}/>
    </div>
  );
}

export default App;
