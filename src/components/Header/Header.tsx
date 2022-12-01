import React from 'react';
import styled from 'styled-components';


const Warpper = styled.div `
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

function Header({text}: any | string) {

  return (
    <Warpper>
        <img src="../img/logo-small.png" alt="" />
    </Warpper>
  )
}

export default React.memo(Header);