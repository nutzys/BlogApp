import React from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { Route, Routes } from 'react-router-dom';
import User from './pages/User';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='card-container'>
          <Routes>
            <Route path="/" index element={<UserList/>}/>
            <Route path="/users/:id" element={<User/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
