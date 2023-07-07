import React, {useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthStatus } from './AuthStatus';

function Logout() {
    const navigate = useNavigate()
    const {setLogged} =  useContext(AuthStatus)
    useEffect(() => {
        fetch('http://127.0.0.1:5555/logout').then(res => {
                if (res.status === 200) {
                  setLogged({name:'', status: false})
                    navigate('/login')
                }
            })
        
    })
    
  return (
    <div>
      <h1>Logged out</h1>
    </div>
  )
}

export default Logout
