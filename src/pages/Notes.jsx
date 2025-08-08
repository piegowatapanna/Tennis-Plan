import React, { useState }from 'react';

//Komponent notes - w tej wersji posiada tylko pole do wpisania tekstu i przycisk Dodaj notatke
export default function Notes () {

  //Stan komponentu do przechowywania wpisywanego tekstu w polu input
  //noteText - aktualna wartość pola
  //setNoteText - fukncja do zmiany tej wartości
  const [noteText, setNoteText] = useState('');

  return (
    <div>
      {/*Tytuł podstrony */}
      <h1>Notes</h1>

      {/* Formularz dodawania notatki, e.preventDefault - blokuje domyślnie przeładowania strony po wysłaniu formularza*/}
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Pole tekstowe kontrolowane przez React (wartość pochodzi ze stanu noteText) */}
        <input
        type="text"
        placeholder='Wpisz notatkę...'
        value={noteText} //Wartość pola jest zawsze równa stanowi noteText
        onChange={(e) => setNoteText(e.target.value)} //Kada zmiana w polu aktualizuje stan
        />
         {/* Przycisk do wysyłania formularza */}
        <button type='submit'>Dodaj notatkę</button>
      </form>
      </div>
  );
}
