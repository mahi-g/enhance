import React from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';

const bgColor = {
    background: '#383838'
}

const Footer = () => {
    return(
        <Nav justified style={bgColor}>
            <NavItem>
                <NavLink disabled>
                    Copyright 2020
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    About
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    Contact
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default Footer;