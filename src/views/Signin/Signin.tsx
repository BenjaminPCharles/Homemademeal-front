import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { userLogin } from '../../features/user/userAction';
import { useAppDispatch } from '../../app/store';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ButtonGoogle from '../../components/ButtonGoogle/ButtonGoogle';



interface SignInData {
  sendUserInfo: boolean | undefined;
}

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

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.user
  )
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [ messageLogin, setMessageLogin] = useState("");

  const onSubmit = (data: any) => {
    dispatch(userLogin(data))
  };

  useEffect(() => {
    // redirect user to profile page if registration was successful
    if (success) navigate('/profile')
    if (error === 'user') setMessageLogin("Vous devez vous inscrire ou confimer votre compte regardez dans votre boite mail");
  }, [navigate, success])


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
      {messageLogin !== "" ? <span>{messageLogin}</span> : null}
      </Warpper>
  )
}

export default React.memo(Signin);