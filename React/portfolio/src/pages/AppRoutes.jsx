import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "../components/Common/Navbar/Navbar";
import Footer from "../components/Common/Footer/Footer";
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from '../pages/Contact/Contact';
import Portfolio from '../pages/Portfolio/Portfolio';
import Error from "./Error/Error"

function App() {
    const location = useLocation();

    const showNavbar = location.pathname === '/' || location.pathname === '/sobremim' || location.pathname === '/contato' || location.pathname === '/portfolio';
    const showFooter = location.pathname === '/' || location.pathname === '/sobremim' || location.pathname === '/contato' || location.pathname === '/portfolio';

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobremim" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {showFooter && <Footer />}
        </>
    );
}

function AppWithLocation() {
    const location = useLocation();

    return (
        <App location={location} />
    );
}

export default function Root() {
    return (
        <BrowserRouter>
            <AppWithLocation />
        </BrowserRouter>
    );
}