# 🎾 Tennis Plan

Aplikacja **Tennis Plan** to prosty planer tenisowy stworzony w React, pozwalający użytkownikowi zapisywać mecze, śledzić statystyki i notować błędy. Aplikacja skierowana jest do tenisistów amatorów, którzy chcą poprawić swoją grę dzięki analizie danych.

## 🚀 Funkcje
- Zapisywanie rozegranych meczów
- Dodawanie notatek i błędów
- Przegląd statystyk
- Prosty interfejs i responsywny design

## 🛠 Technologie
- [React 18+](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- CSS (oddzielne pliki per komponent)
- Routing: `react-router-dom`
- LocalStorage (w planach)

## 📁 Struktura folderów

```
src/
├── assets/          # Zasoby: logo, obrazy
├── components/      # Komponenty wspólne (Navbar, Layout)
│   ├── Layout.jsx
│   ├── Layout.css
│   ├── Navbar.jsx
│   └── Navbar.css
├── pages/           # Widoki aplikacji
│   ├── Home.jsx
│   ├── Calendar.jsx
│   ├── Login.jsx
│   ├── Notes.jsx
│   ├── Stats.jsx
│   ├── *.css         # Styl każdego widoku
├── App.jsx          # Główna struktura i routing
├── main.jsx         # Punkt wejściowy aplikacji
├── index.css        # Style globalne (reset, body)
```

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

## 📌 Status projektu

✅ Trwają prace nad MVP  
🧠 Komponenty podzielone, trwają prace nad routingiem i przechowywaniem danych  
🎨 Stylowanie podzielone na osobne pliki `.css`

---

## ✍️ Autor

**Klaudia Frankowska**  
JavaScript Developer (Coders Lab 2025)  
Projekt końcowy – ścieżka Front-end
