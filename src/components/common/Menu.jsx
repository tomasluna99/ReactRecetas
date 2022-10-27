import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <header>
            <Navbar bg="primary text-dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Recetas de cocina
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className={"nav-item nav-link"}>
                                Inicio
                            </NavLink>
                            <NavLink to="/administrar" className={"nav-item nav-link"}>
                                Aministrador
                            </NavLink>
                            <NavLink to="/usuario/login" className={"nav-item nav-link"}>
                                Iniciar sesion
                            </NavLink>
                            <NavLink to="/usuario/registro" className={"nav-item nav-link"}>
                                Registrate
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Menu;
