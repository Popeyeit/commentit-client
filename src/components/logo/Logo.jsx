import React from 'react';
import { Link } from 'react-router-dom';
import styled from './logo.module.css';
const Logo = ({ color = null }) => {
  return (
    <Link to="/">
      <div className={styled.logo} style={{ color: `#${color}` }}>
        Comment<span>{'<IT>'}</span>
      </div>
    </Link>
  );
};

export default Logo;
