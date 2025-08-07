import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import Stats from './pages/Stats';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kalendarz" element={<Calendar />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/statystyki" element={<Stats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
   );
  }  

  


export default App;
