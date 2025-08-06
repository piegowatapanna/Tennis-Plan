import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';


import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import Stats from './pages/Stats';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kalendarz" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/statystyki" element={<Stats />} />
      </Routes>
    </div>
  );
};



export default App;
