import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(()=>{
    const unsubcribed = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // logged in
        console.log(authUser);
        dispatch(login({
          uid:authUser.uid,
          email:authUser.email, 
        }))
      }
      else{
        // logged out
        dispatch(logout());
      }
    })
    return unsubcribed;
  },[dispatch])
  
  return (
    <div className="app">
     {!user ? <LogInScreen/>  : <Routes>
      <Route exact path='/profile' element={<ProfileScreen/>}/>
      <Route exact path="/" element={<HomeScreen/>} />
      </Routes>}
     
    </div>
  );
}

export default App;
