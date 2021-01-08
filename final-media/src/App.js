import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {

   const user = useSelector(selectUser)
   const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
          // signify the user is logged in
          dispatch(login({
            email:userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,

          })
        );
      }else{
        // signify the user is logged out
        dispatch(logout());

      }
    })

  }, [])


  return (
    <div className="app">
      <Header/>
      {!user ? (<Login/>) // Defaults any no Registered Users to the Login Page.Maybe Alterative to react Router Dom
      :(
          <div className="app_body">
          <Sidebar/>
          <Feed/>
          
        </div>
      )}
      
    </div>
  );
}

export default App;
