import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const setActivaClass = ({ isActive }) => (isActive ? "menu active" : "menu")

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={setActivaClass} to="/" >Home</NavLink>
            {"--"}
            <NavLink className={setActivaClass} to="/pokemones">Pokemones</NavLink>
            {"--"}
            <NavLink className={setActivaClass} to="/favoritos">Favoritos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar