import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Fullstack from './Components/Fullstackdev';
import Datascience from './Components/Datascience';
import Cyber from './Components/Cyber';
import Career from './Components/Career';
import All from './Components/All';
import axios from 'axios';


const App = () => {
    
  return (
    <div className='app'>
      <Navbar/>
      <div className='content'>
      <div className='row w-100 mx-auto mt-3 py-3'>
    <Routes>
        <Route path="/" element={<All />}></Route>
        <Route path="/all" element={<All />}></Route>
        <Route path="/fsd" element={<Fullstack />}></Route>
        <Route path="/data" element={<Datascience />}></Route>
        <Route path="/cyber" element={<Cyber />}></Route>
        <Route path="/career" element={<Career />}></Route>
    </Routes>
    </div>
    </div>
    </div>
  );
};

export default App;