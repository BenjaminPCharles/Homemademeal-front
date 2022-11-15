import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



function NavButton({text}: any | string ) {

  const Warpper = styled(NavLink) `
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  margin: 1em .7em;
  border: 3px solid #232323;
  box-shadow: 2px 2px 6px #232323;

  background-image: url(../public/img/${text}.png);
  background-position: center;

  &.active {
    box-shadow: inset 2px 2px 6px #232323;
  }

`;


  return (
    <Warpper to={`/${text}`}></Warpper>
  )
}

export default React.memo(NavButton);