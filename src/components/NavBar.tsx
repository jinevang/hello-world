import React from 'react';
import { StyledNavBar } from '../styled/nav-bar.tsx';

const NavBar = () => {
  return(<StyledNavBar>
    <span><a href='/hello-world/home'>Home</a></span>
    <span><a href='/hello-world/things-to-read'>Things to Read</a></span>
  </StyledNavBar>)
};

export default NavBar;