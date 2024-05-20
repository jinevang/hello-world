import React from 'react';
import { StyledNavBar } from '../styled/nav-bar.tsx';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(<StyledNavBar>
    <span><Link to='/home'>Home</Link></span>
    <span><Link to='/things-to-read'>Things to Read</Link></span>
    <span><Link to='/interesting'>Interesting Page</Link></span>
  </StyledNavBar>)
};

export default NavBar;