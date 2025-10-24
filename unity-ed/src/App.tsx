import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users,setUsers] = useState([])
  const fetchUsers = async ()=>{
    const response = await axios.get('http://localhost:8000/users/')
    console.log(response)
    setUsers(response.data.users)
  }

  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <>
      <h1>Hello world</h1>
      {
        users.map((user)=><p>{user}</p>)
      }
    </>
  )
}

export default App
