import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import styled from './header.module.css';

const Header = () => {
  return (
    <header className={styled.header}>
      <div className="container">
        <div className={styled.header__wrapper}>
          <div className={styled.logo__wrapper}>
            <Logo />
          </div>

          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
