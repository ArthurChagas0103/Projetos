import { useState } from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About"

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderComponent = (page) => {
        if (page === 'home') {
            return <Home />;
        }
        else if (page === 'about') {
            return <About />;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
            {renderComponent(currentPage)}
        </div>
    );
}

export default App;