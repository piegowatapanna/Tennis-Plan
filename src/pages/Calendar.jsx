import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';

export default function Calendar() {
  // Rok/miesiąc/bieżąca liczba dni
  const year = new Date().getFullYear();
  const monthIndex = new Date().getMonth(); // 0-11
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  // Święta z API
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/PL`)
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((err) => console.error('Błąd API świąt:', err));
  }, [year]);

  const isHoliday = (day) => {
    const d = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return holidays.some((h) => h.date === d);
  };

  // Własne wydarzenia w localStorage
  const [events, setEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('tp_calendar_events');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

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

    const id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now());

    setEvents((prev) => [
      ...prev,
      { id, date: eventDate, text: cleanText },
    ]);

    setEventText('');
    setEventDate('');
  };

  // Usuwanie wydarzenia
  const handleRemoveEvent = (id) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
  };

  // Wydarzenia dla danego dnia (do kropek w komórkach)
  const eventsForDay = (day) => {
    const d = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter((ev) => ev.date === d);
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Kalendarz</h1>
      <Link to="/" className="back-button">← Powrót</Link>

      {/* opcjonalny wrapper dla RWD (poziome przewijanie na telefonach) */}
      <div className="cal-wrapper">
        <div className="calendar-grid">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`calendar-day ${isHoliday(day) ? 'holiday' : ''}`}
            >
              <span className="day-number">{day}</span>
              {isHoliday(day) && <div className="holiday-dot" />}
              {eventsForDay(day).length > 0 && <div className="event-dot" />}
            </div>
          ))}
        </div>
      </div>

      {/* Formularz dodawania własnych wydarzeń */}
      <form className="calendar-form" onSubmit={handleAddEvent}>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          aria-label="Data wydarzenia"
          required
        />
        <input
          type="text"
          placeholder="Opis wydarzenia..."
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          aria-label="Opis wydarzenia"
          required
        />
        <button type="submit">Dodaj</button>
      </form>

      {/* Lista wszystkich wydarzeń (posortowana: najnowsze na górze) */}
      <ul className="calendar-events-list">
        {[...events]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((ev) => (
            <li key={ev.id}>
              <b>{ev.date}:</b> {ev.text}
              <button onClick={() => handleRemoveEvent(ev.id)}>Usuń</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
