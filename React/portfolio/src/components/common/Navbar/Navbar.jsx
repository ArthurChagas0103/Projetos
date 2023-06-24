import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarStyle from '../../../assets/styles/Navbar';

const { Nav, NavLinks, TextAC } = NavbarStyle

function Navbar({ setCurrentPage }) {
    return (
        <>
            <Nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" id="menu"><i className="fa fa-bars" id="barras"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav col-12 justify-content-center">
                        <li className="nav-item">
                            <TextAC className="navbar-brand mr-5">AC</TextAC>
                        </li>
                        <li className="nav-item active">
                            <NavLinks className="nav-link mr-5 mt-3" id="home" onClick={() => setCurrentPage('home')}>Home</NavLinks>
                        </li>
                        <li className="nav-item active">
                            <NavLinks className="nav-link mr-5 mt-3" href="/front-end/about/about.html">About Me</NavLinks>
                        </li>
                        <li className="nav-item active">
                            <NavLinks className="nav-link mr-5 mt-3" href="/front-end/contact/contact.html">Contact</NavLinks>
                        </li>
                        <li className="nav-item active">
                            <NavLinks className="nav-link mr-5 mt-3" href="/front-end/portfolio/portfolio.html">Portfolio</NavLinks>
                        </li>
                        <li className="nav-item active">
                            <form className="form-inline mt-3"
                                onSubmit="if(this.search.value!=null && this.search.value!='') findString(this.search.value);return false">
                                <input className="form-control mr-sm-2" type="search" placeholder="Procurar" aria-label="Search"
                                    id="search" /><a onclick="findString(document.getElementById('search').value)"><i
                                    className="fa fa-search" id="lupa" ></i></a>
                            </form>
                        </li>
                    </ul>
                </div>
            </Nav>
        </>
    );
}

export default Navbar;