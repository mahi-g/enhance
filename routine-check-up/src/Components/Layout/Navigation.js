import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'shards-react';
import {  Link } from 'react-router-dom'
import styled from 'styled-components';
const nav = {
    display: 'flex',
    justifyContent: 'flex-end',
}
const navbar = {
    background: '#fff'
}

const StyledLink = styled(Link)`
    color: #333;
`

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    return(
            <Navbar expand="md">
                <Link to="/">Enhance</Link>
                <NavbarToggler onClick={()=>setOpen(!isOpen)}/>
                <Collapse theme="dark" open={isOpen} style={nav} navbar>
                    <NavItem theme="dark" className="list-unstyled">
                        <NavLink>
                            <StyledLink to="/friends">
                                Friends
                            </StyledLink>
                        </NavLink>
                    </NavItem>
                    <NavItem theme="dark" className="list-unstyled">
                        <NavLink>
                            <StyledLink to="/activities">
                                Activities
                            </StyledLink>
                        </NavLink>
                    </NavItem>
                    <NavItem theme="dark" className="list-unstyled">
                        <NavLink>
                            <StyledLink to="/manage-tasks">
                                Manage
                            </StyledLink>
                        </NavLink>
                    </NavItem>
                    <NavItem theme="dark" className="list-unstyled">
                        <NavLink>
                            <StyledLink to="/signin">
                                Sign In
                            </StyledLink>
                        </NavLink>
                    </NavItem>
                </Collapse>
            </Navbar>
    );
}

export default Navigation;