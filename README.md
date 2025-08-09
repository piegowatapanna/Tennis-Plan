# 🎾 Tennis Plan

Aplikacja **Tennis Plan** to proste narzędzie dla tenisistów amatorów i pasjonatów sportu, które umożliwia:
- planowanie treningów i meczów w kalendarzu,
- prowadzenie notatek,
- oznaczanie świąt w kalendarzu na podstawie danych z API.

Projekt został stworzony w ramach kursu **JavaScript Developer** w Coders Lab.

---

## 📌 Funkcje

### 🗓 Kalendarz
- Widok bieżącego miesiąca w formie siatki 7×N.
- Pobieranie **świąt państwowych** z API [`date.nager.at`](https://date.nager.at).
- Oznaczanie świąt czerwoną ramką i kropką.
- Możliwość dodawania własnych wydarzeń (data + opis).
- Zapisywanie wydarzeń w **localStorage** (pozostają po odświeżeniu strony).
- Usuwanie wydarzeń z listy.
- Zielona kropka w dniu, w którym jest zaplanowane wydarzenie.
- Responsywny układ — kalendarz w pełnej szerokości na desktopie, przewijanie w poziomie na małych ekranach.

### 📝 Notatki
- Dodawanie notatek.
- Zapisywanie notatek w pamięci przeglądarki (localStorage).
- Usuwanie wybranych notatek.
- Prosty i czytelny układ.

---

## 🛠 Technologie

Projekt został stworzony w oparciu o:
- **React 18+**
- **React Router** – obsługa podstron (`/`, `/kalendarz`, `/notes`, `/statystyki`)
- **CSS3** – modułowe style w plikach `.css`
- **LocalStorage API** – trwałe przechowywanie danych w przeglądarce
- **Fetch API** – pobieranie danych o świętach z zewnętrznego API

---

## 📁 Struktura folderów

src/
├── components/
│ ├── Layout.jsx
│ ├── Navbar.jsx
│ ├── Footer.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Calendar.jsx
│ ├── Notes.jsx
│ ├── Stats.jsx
│ ├── NotFound.jsx
│
├── assets/ # grafiki, logo, ikony
│
├── index.css # style globalne
│
├── main.jsx # punkt startowy aplikacji
│
└── App.jsx # konfiguracja tras

## ▶️ Jak uruchomić projekt

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/twoje-konto/TennisPlan.git
cd TennisPlan
```

2. **Zainstaluj zależności**
```bash
npm install
```

3. **Uruchom aplikację lokalnie**
```bash
npm run dev
```

4. Otwórz w przeglądarce:
```
http://localhost:5173
```

📌 Status projektu
✅ Zrealizowane:

Strona główna z nawigacją

Widok kalendarza z zapisem i usuwaniem wydarzeń

Obsługa API świąt państwowych

Notatki (CRUD w localStorage)

Sekcja statystyk

Responsywny layout



📅 Do ewentualnego rozwoju:

Filtrowanie wydarzeń po typie (mecz/trening/inne)

Eksport danych do pliku

Możliwość przełączania miesięcy w kalendarzu



## ✍️ Autor

**Klaudia Frankowska**  
JavaScript Developer (Coders Lab 2025)  
Projekt końcowy – ścieżka Front-end
