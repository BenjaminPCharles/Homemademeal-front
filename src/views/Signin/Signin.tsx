import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ButtonGoogle from '../../components/ButtonGoogle/ButtonGoogle';

const Warpper = styled.div `
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  form {
    display: flex;
    flex-direction: column;
    margin: 3em 0 3em 0;
  }

  input {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 0.8em 6.1em 0.5em 1em;
    margin: .5em 0;
  }
`;

function Signin({text}: any | string) {

  return (
    <Warpper>
      <Header />
      <ButtonGoogle text={'Connection'} />
      <form>
        <input type="email" name="" placeholder='Mail'/>
        <input type="password" name="" placeholder='Mot de passe'/>
      </form>
      <Button text={"Connection"} />
    </Warpper>
  )
}

export default React.memo(Signin);