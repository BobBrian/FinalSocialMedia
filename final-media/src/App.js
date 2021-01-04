import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';
import './App.css';
import Widget from './Widget';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';

function App() {

  const user = useSelector(selectUser)


  return (
    <div className="app">
      <Header/>


      {!user ? (<Login/>)
      :(
          <div className="app_body">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      )}
      
    </div>
  );
}

export default App;
