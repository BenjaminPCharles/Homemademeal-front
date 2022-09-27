import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

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
    align-items: center;
    margin: 3em 0 3em 0;
  }

  input {
    border: solid 3px #232323;
    border-radius: 25px;
    padding: 0.8em 6.1em 0.5em 1em;
    margin: .5em 0;
  }
  span {
    color: #f45d48;
  }
`;

function Signin() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <Warpper>
      <Header />
      <ButtonGoogle text={'Connection'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Mail' {...register("email", {required: true})}/>
        <input type="password" placeholder='Mot de passe' {...register("password", {required: true})}/>
        {errors.email && <span>Vous devez entrer mail</span>}
        {errors.password && <span>Vous devez entrer un mot de passe</span>}
        <Button text={"Connection"} />
      </form>
    </Warpper>
  )
}

export default React.memo(Signin);