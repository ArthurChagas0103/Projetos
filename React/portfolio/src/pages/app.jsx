import { useState } from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Home from "./Home/Home";

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderComponent = (page) => {
        if (page === 'home') {
            return <Home />;
        }
    };

    return (
        <div>
            <Navbar setCurrentPage={setCurrentPage} />
            {renderComponent(currentPage)}
        </div>
    );
}

export default App;