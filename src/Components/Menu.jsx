import React, { useState } from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { MdToday } from 'react-icons/md';

export default (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
                <Navbar color="dark" dark expand="md">
                <NavbarToggler onClick={toggle}/>
                <NavbarBrand href="/todo"><MdToday className="mr-2" size="32"/>ToDo App</NavbarBrand>
                <Collapse isOpen={!isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    {/* ToDo List Page */}
                    <NavItem>
                    <NavLink href="/todo">
                    Todo List
                    </NavLink>
                    </NavItem>

                    {/* About Us Page */}
                    <NavItem>
                    <NavLink href="/about">
                        About
                    </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )

}