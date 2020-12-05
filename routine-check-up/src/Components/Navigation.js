import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'shards-react';
import {  Link } from 'react-router-dom'

const nav = {
    display: 'flex',
    justifyContent: 'flex-end'
}


const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    return(
        <Navbar sticky expand="md">
            <NavbarBrand theme="dark" to="/">Enhance</NavbarBrand>
            <NavbarToggler onClick={()=>setOpen(!isOpen)}/>
            <Collapse theme="dark" open={isOpen} style={nav} navbar>
                <NavItem theme="dark" className="list-unstyled">
                    <NavLink>
                        <Link to="/manage-tasks">
                            Manage Tasks
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem theme="dark" className="list-unstyled">
                    <NavLink>
                        <Link to="/friends">
                            Friends
                        </Link>
                    </NavLink>
                </NavItem>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;