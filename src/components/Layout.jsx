import React from 'react';
//pasek nawigacyjny (menu)
import Navbar from './Navbar';
import Footer from '../pages/Footer';
//"gniazdo" w którym pojawia się zawartość aktualnie wybranej podsrtrony, 
// nie musimy powtarzać Navbar i Footer w kadym widoku
import { Outlet } from 'react-router-dom';

// Komponent Layout – odpowiada za wspólny układ (szkielet) wszystkich stron w aplikacji
// Dzięki Layout możemy trzymać elementy stałe (Navbar, Footer) w jednym miejscu,
// a w środku (w <Outlet />) renderować dynamiczną treść zależną od wybranej trasy

export default function Layout () {
    return (
        <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
    )
}