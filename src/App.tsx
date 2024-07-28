import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AddUser from './components/AddUser'
import UserTable from './components/UserTables'

function App() {
  
  const[user, setUser] = useState([]);
  

  return (
    <>
      <AddUser user={user} setUser={setUser}/>
      <UserTable user={user} setUser = {setUser}/>
    </>
  )
}

export default App
