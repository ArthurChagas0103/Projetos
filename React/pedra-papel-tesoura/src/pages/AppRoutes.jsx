import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home/Home"
import Error from "./Error/Error"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
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