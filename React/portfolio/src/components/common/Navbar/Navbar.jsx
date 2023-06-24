import NavbarStyle from '../../../assets/styles/Navbar';
import { useEffect } from 'react';

const { Nav, NavbarButtonResponsive, Barras, TextAC, NavLinks, SearchWrapper, Search, Lupa } = NavbarStyle

function Navbar({ currentPage, setCurrentPage }) {

    useEffect(() => {
        $('#navbarTogglerButton').click(function () {
            $('#navbarSupportedContent').collapse('toggle');
        });

        $('#lupa').click(function () {
            let texto = $('#search').val();
            let strFound = false;

            if (window.find) {
                strFound = window.find(texto);
                if (!strFound) {
                    strFound = window.find(texto, 0, 1);
                    while (window.find(texto, 0, 1)) {
                        continue;
                    }
                }
            } else if (navigator.appName.indexOf("Microsoft") !== -1) {
                var TRange = null;
                if (TRange !== null) {
                    TRange.collapse(false);
                    strFound = TRange.findText(texto);
                    if (strFound) {
                        TRange.select();
                    }
                }
                if (TRange === null || strFound === 0) {
                    TRange = window.document.body.createTextRange();
                    strFound = TRange.findText(texto);
                    if (strFound) {
                        TRange.select();
                    }
                }
            } else if (navigator.appName === "Opera") {
                bootbox.alert("Opera não suportado");
                return;
            }

            if (!strFound) {
                bootbox.alert("Texto '" + texto + "' não encontrado!");
            }
        });
    }, []);

    return (
        <>
            <Nav className="navbar navbar-expand-lg">
                <NavbarButtonResponsive className="navbar-toggler" type="button" id="navbarTogglerButton" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="menu">
                        <Barras className="fa fa-bars"></Barras>
                    </span>
                </NavbarButtonResponsive>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav col-12 justify-content-center">
                        <li className="nav-item">
                            <TextAC className="nav-link" onClick={() => setCurrentPage('home')}>AC</TextAC>
                        </li>
                        <li className="nav-item">
                            <NavLinks className={`nav-link ${currentPage === 'home' ? 'ativo' : ''}`} onClick={() => setCurrentPage('home')}>Home</NavLinks>
                        </li>
                        <li className="nav-item">
                            <NavLinks className={`nav-link ${currentPage === 'about' ? 'ativo' : ''}`} onClick={() => setCurrentPage('about')}>About Me</NavLinks>
                        </li>
                        <li className="nav-item">
                            <NavLinks className={`nav-link ${currentPage === 'contact' ? 'ativo' : ''}`} onClick={() => setCurrentPage('contact')}>Contact</NavLinks>
                        </li>
                        <li className="nav-item">
                            <NavLinks className={`nav-link ${currentPage === 'portfolio' ? 'ativo' : ''}`} onClick={() => setCurrentPage('portfolio')}>Portfolio</NavLinks>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline mt-3">
                                <SearchWrapper>
                                    <Search
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        name="search"
                                        id="search"
                                    />
                                    <Lupa className="fa fa-search" id="lupa" />
                                </SearchWrapper>
                            </form>
                        </li>
                    </ul>
                </div>
            </Nav>
        </>
    );
}

export default Navbar;