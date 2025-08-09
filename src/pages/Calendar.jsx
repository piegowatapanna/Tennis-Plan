import React, { useEffect, useState } from 'react'
import './Calendar.css';
import { Link } from 'react-router-dom';

export default function Calendar () {
  const year = new Date().getFullYear();
  const monthIndex = new Date().getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

const [holidays, setHolidays] = useState([]);


useEffect(() => {
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/PL`)
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((err) => console.error('Błąd API świąt:', err));
  }, [year]);

 const isHoliday = (day) => {
    const dateStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.some((h) => h.date === dateStr);
  };


return (
    <div className="calendar-container">
      <h1 className="calendar-title">Kalendarz</h1>
      <Link to="/" className="back-button">← Powrót</Link>

      <div className="calendar-grid">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`calendar-day ${isHoliday(day) ? 'holiday' : ''}`}
            title={isHoliday(day) ? 'Święto' : undefined}
          >
            <span className="day-number">{day}</span>
            {isHoliday(day) && <div className="holiday-dot"></div>}
          </div>
        ))}
      </div>

  <p className='calendar-placeholder'>
  </p>
  </div>
  );
}
