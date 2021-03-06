import React from 'react'
import { Profile } from './Profile'
import { TagStats } from './TagStats'
import { useDispatch } from 'react-redux'
import { logout } from '../Redux/Login/action'
import Button from '@mui/material/Button';

export const Sidebar = ({token, username,todos}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <Profile token={token} username={username}/>
        <hr />
        <TagStats todos={todos}/>
          <hr />
          <Button style={{backgroundColor:"red",color:"white"}}
          onClick={()=>dispatch(logout())} 
          >logout</Button>
    </div>
  )
}
