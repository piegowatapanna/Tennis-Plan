import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 🔗 do powrotu na stronę główną
import './Notes.css'; // style dla tej podstrony

//  Komponent do dodawania i zapisywania notatek
export default function Notes() {
  //  Stan do przechowywania wpisywanego tekstu
  const [noteText, setNoteText] = useState('');

  //  Stan na wszystkie notatki — wczytujemy je z localStorage przy pierwszym uruchomieniu
  const [allNotes, setAllNotes] = useState(() => {
    const savedNotes = localStorage.getItem('tp_notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Zapisujemy notatki w localStorage za każdym razem, gdy się zmienią
  useEffect(() => {
    localStorage.setItem('tp_notes', JSON.stringify(allNotes));
  }, [allNotes]);

  //  Dodawanie nowej notatki
  const handleAddNote = (event) => {
    event.preventDefault(); // blokuje przeładowanie strony
    const cleanText = noteText.trim();

    if (!cleanText) return; // jeśli pusty tekst → nic nie rób

    // Dodajemy nową notatkę na początek listy
    setAllNotes((prevNotes) => [
      { id: crypto.randomUUID(), text: cleanText },
      ...prevNotes
    ]);

    setNoteText(''); // czyścimy pole po dodaniu
  };

  // Usuwanie notatki po ID
  const handleRemoveNote = (idToRemove) => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToRemove));
  };

  return (
    <div className="notes-container">
      <h1 className="notes-title">Notes</h1>

      {/* Powrót na stronę główną */}
      <Link to="/" className="back-button">← Powrót</Link>

      {/*  Formularz dodawania nowej notatki */}
      <form className="notes-form" onSubmit={handleAddNote}>
        <input
          className="notes-input"
          type="text"
          placeholder="Wpisz notatkę..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="notes-add" type="submit">Dodaj notatkę</button>
      </form>

      {/*  Lista notatek */}
      <ul className="notes-list">
        {allNotes.length === 0 && (
          <li className="notes-empty">Brak notatek — dodaj pierwszą! ✍️</li>
        )}

        {allNotes.map((note) => (
          <li key={note.id} className="notes-item">
            <span className="notes-text">{note.text}</span>
            <button
              className="notes-remove"
              onClick={() => handleRemoveNote(note.id)}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
