import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styled.navigation}>
      <NavLink to="/" className={styled.navigation__item}>
        Home
      </NavLink>
      <NavLink to="/comments" className={styled.navigation__item}>
        Comments
      </NavLink>
    </nav>
  );
};

export default Navigation;
