import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth.js'
import { logout } from '../../Store/authSlice.js'

const LogoutBtn = () => {
  
  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    authService.logout()
      .then(()=>{dispatch(logout())})
      .catch((error)=>{
        console.log(`Error in : LgoutBtn ::logoutHandler `, error)
      })
  }
  
  return (
    <button
    onClick={logoutHandler}
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    > Logout </button>
  )
}

export default LogoutBtn