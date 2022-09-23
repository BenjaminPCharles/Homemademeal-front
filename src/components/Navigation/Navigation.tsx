import React from 'react';
import styled from 'styled-components';
import NavButton from '../NavButton/NavButton';

const Warpper = styled.div `
  width: 100%;
  position: relative;
  margin-top: 3em;
`;

const Images = styled.div `
  display: flex;
  position: absolute;
  bottom: 0;
  right: calc( 50% - 170px);
`;

const Background = styled.div `
  height: 2.5em;
  width: 100%;
  background-color: #078080;
  border-radius: 25px 25px 0 0;
`;

function Navigation() {
  return (
    <Warpper>
      <Images>
        <NavButton text={"ingredient"} />
        <NavButton text={"profil"} />
        <NavButton text={"receipt"} />
        <NavButton text={"search"} />
      </Images>
      <Background></Background>
    </Warpper>
  )
};

export default React.memo(Navigation);