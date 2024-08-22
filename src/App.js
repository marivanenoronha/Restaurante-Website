
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container  from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div >
      <Navbar expand="1g" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand className='navbar-brand text-success fw-semibold' >
            Restaurante-Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-upercase'>Home</Nav.Link>
              <Nav.Link href='/menu' className='text-upercase'>Menu</Nav.Link>
              <Nav.Link href='/about' className='text-upercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-upercase'>Contato</Nav.Link> 
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
        <p className='p-3 m-o text-center'>2024 Restaurante-Website. Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
