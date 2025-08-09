import React from 'react'
import './Calendar.css';
import { Link } from 'react-router-dom';

export default function Calendar () {
  const year = new Date().getFullYear();
  const monthIndex = new Date().getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();


  return (
    <div className="calendar-container">
      <h1 className='calendar-title'>Kalendarz</h1>
      <Link to="/" className='back-button'></Link>
      <div className="calendar-grid">
     {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
      <div key={day} className="calendar-day">
       <span className="day-number">{day}</span>
  </div>
))}
  </div>

  <p className='calendar-placeholder'>
  </p>
  </div>
  );
}
