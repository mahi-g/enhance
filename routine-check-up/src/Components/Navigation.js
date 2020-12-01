import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'shards-react';

const nav = {
    display: 'flex',
    justifyContent: 'flex-end'
}
const bgColor = {
    background: '#383838'
}

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    return(
        <Navbar type="dark" expand="md" style={bgColor}>
            <NavbarBrand href="#">Routine Check Up</NavbarBrand>
            <NavbarToggler onClick={()=>setOpen(!isOpen)}/>
            <Collapse theme="light" open={isOpen} style={nav} navbar>
                <NavItem theme="dark" className="list-unstyled">
                    <NavLink href="#">
                        Manage Tasks
                    </NavLink>
                </NavItem>
                <NavItem theme="dark" className="list-unstyled">
                    <NavLink href="#">
                        Friends
                    </NavLink>
                </NavItem>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;