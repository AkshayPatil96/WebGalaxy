import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import s from './navbar.module.css'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <div className={s.mainDiv}>
      <Navbar bg="dark" variant="dark" expand="xxl">
        <Container fluid>
          <Link to='/'>
          <Navbar.Brand >
            <img
              width="25px"
              src="https://cdn-user-icons.flaticon.com/70327/70327769/1659002393033.svg?token=exp=1659003294~hmac=feac30918e26a53696ca00a775984d89"
              alt=""
            />
            <b> WebGalaxy</b>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              
              <Nav.Link className="ml-5" href="#action1">WebTalk <img width='25px' src="https://cdn-icons-png.flaticon.com/512/2258/2258864.png" alt="" /></Nav.Link>
              <Nav.Link href="#action2">WebArt <img width='25px'  src="https://cdn-icons-png.flaticon.com/512/3837/3837442.png" alt="" /></Nav.Link>

              <Nav.Link href="#" disabled>
                WebQue <img width='25px' src="https://cdn-icons.flaticon.com/png/512/3261/premium/3261308.png?token=exp=1659006093~hmac=d7370ba8a3fc74a680dc3d20b9bc0653" alt="" />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <NavDropdown
                className="text-success my-auto text-center m-3"
                title="Profile"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">My Articls</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
               My WebTalks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="text-success my-auto text-center m-3"
                href="#action1"
              >
                SignUp
              </Nav.Link>
              <Nav.Link
                className="text-success my-auto text-center m-3"
                href="#action2"
              >
                LogIn
              </Nav.Link>
              <Form.Control  
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
