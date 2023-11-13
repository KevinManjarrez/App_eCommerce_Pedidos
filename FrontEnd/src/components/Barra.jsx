
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, Button, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Barra() {
  const [show, setShow] = useState(true);
  const [opcionRegistro, setOpcionRegistro] = useState(false);
 

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      setShow(false);
      setOpcionRegistro(true);
    }
  }, []);



  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            {show && ( <Navbar.Brand href="#">
              <i className=""></i>Crud Equipo 4 - TamboFans
            </Navbar.Brand>)}
            <Navbar.Brand href="#"><i className="fa-solid fa-hippo"></i> IW-WEB</Navbar.Brand>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Brand href="#"></Navbar.Brand>
            
  {opcionRegistro && (
    <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/registrarCarrera">
      <i className="fa-solid fa-user-xmark"></i>
      <Navbar.Brand>Registrarse</Navbar.Brand>
    </Link>
  )}

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Opciones</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown title="Pagos (GET - PUT - UPDATE - DELETE)" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="/verPagos">Pagos</NavDropdown.Item>
                    <NavDropdown.Item href="/deletePago">Delete Pago</NavDropdown.Item>
                    <NavDropdown.Item href="/updatePago">Update Pago</NavDropdown.Item>
                    <NavDropdown.Item href="/insertarPago">Insertar Pago</NavDropdown.Item>
                  </NavDropdown> 
                </Nav>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
