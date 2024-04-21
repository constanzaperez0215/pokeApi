import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const setActivaClass = ({ isActive }) => (isActive ? "menu active" : "menu")

  return (
    <Navbar className='navBar' bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand ><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="" /></Navbar.Brand>
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