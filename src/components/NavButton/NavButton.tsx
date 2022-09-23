import React, { useState } from 'react';
import styled from 'styled-components';



function NavButton({text}: any | string) {

  const [isClicked, setIsClicked] = useState(true);

  const Warpper = styled.div `
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  margin: 1em .7em;
  box-shadow: ${isClicked ? "2px 2px 6px #232323": "inset 2px 2px 6px #232323"};
  border: 3px solid #232323;

  background-image: url(../public/img/${text}.png);
  background-position: center;

`;

  const handleClick = () => {
    setIsClicked(!isClicked)
  };

  return (
    <Warpper onClick={handleClick}></Warpper>
  )
}

export default React.memo(NavButton);