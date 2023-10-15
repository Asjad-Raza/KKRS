import React from "react";
import { Outlet } from "react-router";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./Header.scss";

export default function Header(props) {
  return (
    <div>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} bg="dark" data-bs-theme="dark">
          <Container className="NavContainer" fluid>
            <Navbar.Brand href="/">
              <img
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-bock align top"
                alt="Brand_Image"
              />{" "}
              Knight Riders Security Services
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{width:'50%'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Knight Riders Security Services
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" NavContainer justify-content-end flex-grow-1 ">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/Guarding">
                      Gurading Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/LabourSupply">
                      LabourSupply
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/PayrollManagement">
                      Payroll Management
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Housekeeping">
                      Housekeeping Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/F&B">
                      F & B Personnel
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/UtilityStaff">
                      Utility Staff
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/OfficeAssistant">
                      Office Assistant
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/clients">Clients</Nav.Link>
                  <Nav.Link href="/training">Training</Nav.Link>
                  <Nav.Link href="/gallery">Gallery</Nav.Link>
                  <Nav.Link href="/gallery">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
      <Footer title={"Knight Riders Security Services"} />
    </div>
  );
}
