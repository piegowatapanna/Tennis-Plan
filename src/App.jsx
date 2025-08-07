import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Import układu strony (Navbar, Outlet,Footer)
import Layout from './components/Layout';

//Import podstron
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
    <Routes>
       
        {/*Główna trasa z Layoutem jako rodzicem */}
     <Route path="/" element={<Layout />} />
       
        {/*Strona główna renderuje się w Outlet */}
      <Route path="/" element={<Home />} />
        
        {/*Pozostałe podstrony */}
      <Route path="/kalendarz" element={<Calendar />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/statystyki" element={<Stats />} />

        {/*Strona 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
   );
  }  

export default App;

