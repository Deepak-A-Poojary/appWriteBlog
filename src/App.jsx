import react, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth.js";
import { login, logout } from './Store/authSlice.js'
import {Header, Footer }from './components';


function App() {
  
  const [loading, setLoading] = useState(true);
  const dispatch =useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then ((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout({}))
      }
    })
    .catch((e)=>{
      console.log(e);
    })
    .finally(()=>{setLoading(false)})
  }, [])
  

  return !loading ? 
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header />
      <main>
        {/*Outlet*/}
        Outlets will be placed here
      </main>
      <Footer />
    </div>
  </div>
  : null;
}

export default App
