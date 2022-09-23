import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';


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
    margin: 5em 0 3em 0;
  }

  input {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 0.8em 6.1em 0.5em 1em;
    margin: .5em 0;
  }
`;

function Signup() {

  return (
    <Warpper>
      <Header />
      <form>
        <input type="email" name="" placeholder='Mail'/>
        <input type="password" name="" placeholder='Mot de passe'/>
        <input type="password" name="" placeholder='Confirmation de mot de passe'/>
      </form>
      <Button text={"Inscription"} />
    </Warpper>
  )
}

export default React.memo(Signup);