
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import Logo from "./fotos/img/logo-restaurante.png";

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div >
      <Navbar
      expand="lg"
      className="fixed-top bg-body-tertiary"
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <Container>
        <Navbar.Brand className="navbar-brand fw-semibold">
          <a href="/">
            <img
              src={Logo}
              width="100px"
              height="45px"
              className="d-inline-block align-top"
              alt="Logo do Restaurante"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
          <FontAwesomeIcon icon={isExpanded ? faTimes : faBars} />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex align-items-center justify-content-end w-100">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Sobre nós</Nav.Link>
            <Nav.Link href="/menu">Cardápio</Nav.Link>
            <Nav.Link href="/contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-o text-center'>2024 Restaurante Camarão e cia. Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
