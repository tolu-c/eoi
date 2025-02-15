import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './views/admin/login';
import Overview from './views/admin/overview';
import Settings from './views/admin/settings';
import Register from './views/user/register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/overview' element={<Overview />} />
        
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
