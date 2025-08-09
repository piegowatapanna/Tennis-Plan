import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';

export default function Calendar() {
  const year = new Date().getFullYear();
  const monthIndex = new Date().getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();


  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/PL`)
      .then(res => res.json())
      .then(data => setHolidays(data))
      .catch(err => console.error('Błąd API świąt:', err));
  }, [year]);

  const isHoliday = (day) => {
    const d = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.some(h => h.date === d);
  };

  // 2) Własne wydarzenia – przechowujemy w localStorage (analogicznie do Notes)
  const [events, setEvents] = useState(() => {
    // Lazy init – czytamy z localStorage tylko raz przy starcie komponentu
    const saved = localStorage.getItem('tp_calendar_events');
    return saved ? JSON.parse(saved) : [];
  });

  // Każda zmiana events → zapis do localStorage
  useEffect(() => {
    localStorage.setItem('tp_calendar_events', JSON.stringify(events));
  }, [events]);

  // Pola formularza
  const [eventDate, setEventDate] = useState('');
  const [eventText, setEventText] = useState('');

  // Dodawanie wydarzenia
  const handleAddEvent = (e) => {
    e.preventDefault();
    const cleanText = eventText.trim();
    if (!cleanText || !eventDate) return;

    setEvents(prev => [
      ...prev,
      { id: crypto.randomUUID(), date: eventDate, text: cleanText }
    ]);

    setEventText('');
    setEventDate('');
  };

  //  Usuwanie wydarzenia
  const handleRemoveEvent = (id) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
  };

  // Wydarzenia dla danego dnia – do kropki w komórce
  const eventsForDay = (day) => {
    const d = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(ev => ev.date === d);
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Kalendarz</h1>
      <Link to="/" className="back-button">← Powrót</Link>

      <div className="calendar-grid">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
          <div key={day} className={`calendar-day ${isHoliday(day) ? 'holiday' : ''}`}>
            <span className="day-number">{day}</span>
            {isHoliday(day) && <div className="holiday-dot"></div>}
            {eventsForDay(day).length > 0 && <div className="event-dot"></div>}
          </div>
        ))}
      </div>

      {/*  Formularz dodawania własnych wydarzeń */}
      <form className="calendar-form" onSubmit={handleAddEvent}>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          aria-label="Data wydarzenia"
        />
        <input
          type="text"
          placeholder="Opis wydarzenia..."
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          aria-label="Opis wydarzenia"
        />
        <button type="submit">Dodaj</button>
      </form>

      {/* 
       Lista wszystkich wydarzeń */}
      <ul className="calendar-events-list">
        {events.map(ev => (
          <li key={ev.id}>
            <b>{ev.date}:</b> {ev.text}
            <button onClick={() => handleRemoveEvent(ev.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
