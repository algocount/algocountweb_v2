import { Navbar, Container, Nav } from "react-bootstrap";
import { Squeeze as Hamburger } from "hamburger-react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Container fluid>
        {
          //Probabilmente posso evitare di nestarlo e trattarlo direttamente
          //come se fosse un Navbar.Toggle (n.b. hai già provato ad assegnare la classe e non funziona)
        }
        <Navbar.Toggle>
          <Hamburger
            label="show menu"
            className="hamburger-react"
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem>Home</NavItem>
            <NavItem>Project</NavItem>
            <NavItem>Consortium</NavItem>
            <NavItem>Methodology</NavItem>
            <NavItem>News</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
