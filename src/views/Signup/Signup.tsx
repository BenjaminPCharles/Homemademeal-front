import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userSignup } from '../../features/user/userAction';
import { useAppDispatch } from '../../app/store';
import { UserSignup } from '../../interfaces/User';

import { signupVerificationPassword } from '../../utils/signupVerifications';

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
    max-width: 80%;
    text-align: justify;
    font-size: 1.1em
  }
`;

function Signup(){

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.user
  )

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [ messagePassword, setMessagePassword] = useState("");

  const onSubmit = (data: any) => {

      // const passwordCheck = signupVerificationPassword(data.password, data.confirmPassword);
      // if (passwordCheck === "Success"){
        const userInfos = {
          email: data.email.toLowerCase(),
          password: data.password,
          confirmPassword: data.confirmPassword
        } as UserSignup;
        dispatch(userSignup(userInfos)).then(() => {

        });
        // console.log(success)
      // } else {
      //   setMessagePassword(passwordCheck);
      // }
  };
  
  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/')
    // if (error === 'email') setMessagePassword("Vous êtes déjà inscrit vous pouvez vous connecter");
  }, [navigate, success])

  return (
    <Warpper>
      <Header />
      <ButtonGoogle text={"Inscription"}/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='Mail' {...register("email", {required: true})} />
        <input type="password" placeholder='Mot de passe' minLength={8} {...register("password", {required: true})}/>
        <input type="password"  placeholder='Confirmation de mot de passe' {...register("confirmPassword", {required: true})} />
        {errors.email && <span>- Vous devez entrer mail</span>}
        {errors.password && <span>- Vous devez entrer un mot de passe</span>}
        {errors.ConfirmPassword && <span>- Vous devez confirmer le mot de passe</span>}
        {/* {messagePassword !== "" ? <span>{messagePassword}</span> : null} */}
        {error ? <span>{error}</span> : null}
        <Button type={"submit"} text={"Inscription"} />
      </form>
    </Warpper>
  )
}

export default React.memo(Signup);
