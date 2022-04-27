import React from 'react';
import { Container, Navbar, Offcanvas, Nav} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand>Navigation</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Container>
                <Navbar.Brand>
                  <img
                    src="../../../png/1566_oooo.plus.png"
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
              </Container>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div>Name:  Almambet Alymkulov</div>
                <div>Email:  alymkulov.almambet@gmail.com</div>
                <Nav.Link href="/">Gallery</Nav.Link>
                <Nav.Link href="/profile">About me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
