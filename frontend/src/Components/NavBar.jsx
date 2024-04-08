// components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/predict">Predict</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
