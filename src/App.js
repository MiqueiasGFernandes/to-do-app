import React, { useState } from 'react';
import './App.css'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Row, Col, Input, Button } from 'reactstrap'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Container>
        <Navbar color="dark" dark expand="md">
          <NavbarToggler onClick={toggle}/>
          <NavbarBrand href="#">ToDo App</NavbarBrand>
          <Collapse isOpen={!isOpen} navbar>
            <Nav className="mr-auto" navbar>

              {/* ToDo List Page */}
              <NavItem>
                <NavLink href="#">
                Todo List
                </NavLink>
              </NavItem>

              {/* About Us Page */}
              <NavItem>
                <NavLink href="#">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <main>
        <Row className="mt-5 pb-3" xs="12">
          <Col>
            <h1 className="d-inline">Tasks</h1><h2 className="descr d-inline ml-2">Register</h2>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col xs="9">
            <Input xs="9" type="text" placeholder="Add your task here..." name="taskTxt" id="taskTxt"/>
          </Col>
          <Col xs="3">
            <Button className="btnAdd" color="info" >
              Add
            </Button>
            <Button className="ml-left" outline color="secoundary" >
              Search
            </Button>
          </Col>
        </Row>
        </main>
      </Container>
    </div>
  );
}

export default App;
