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
                    Footer Branding
                </NavLink>
            </NavItem>
        </Nav>
    );
};

export default Footer;
