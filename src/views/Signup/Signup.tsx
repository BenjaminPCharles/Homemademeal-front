import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'

import { requestsAddUsers } from '../../requests/userRequests';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import ButtonGoogle from '../../components/ButtonGoogle/ButtonGoogle';

interface SignUpData {
  securePassword: boolean | undefined;
  confirmPassword: boolean | undefined;
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
    max-width: 80%;
    text-align: justify;
    font-size: 1.1em
  }
`;

function Signup(){

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [signUpData, setSignUpData] = useState<SignUpData>({
    securePassword: undefined,
    confirmPassword: undefined,
    sendUserInfo: undefined,
  })


  const loginRequest = async (email: string, password: string) => {
    try {
      const result = await requestsAddUsers(email, password);
      if(result){
        setSignUpData({
          securePassword: true,
          confirmPassword: true,
          sendUserInfo: true,
        });
      } else {
        setSignUpData({
          securePassword: true,
          confirmPassword: true,
          sendUserInfo: false,
        });
      }
    }catch(err){
      console.error(err);
    }
  }


  const onSubmit = (data: any) => {

    const passwordSpecialCaractere: RegExp = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$') ;

    // Check if password contain : uppercase, lowercase, number and special character
    if(passwordSpecialCaractere.test(data.password)){
      setSignUpData({
        securePassword: true,
        confirmPassword: false,
        sendUserInfo: undefined,
      })
      console.log("regex ok")
      // Check if password is equal to confirmPassword
      if(data.password === data.confirmPassword){
        setSignUpData({
          securePassword: true,
          confirmPassword: true,
          sendUserInfo: undefined,
        })
        console.log("confirm ok")
        loginRequest(data.email, data.password)
      } else {
        setSignUpData({
          securePassword: true,
          confirmPassword: false,
          sendUserInfo: undefined,
        })
      }
    } else {
      setSignUpData({
        securePassword: false,
        confirmPassword: false,
        sendUserInfo: undefined,
      })
    }

  };

  // password: a9A@12345

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
        {signUpData.securePassword === false ? <span>- Le mot de passe doit contenir au moins une majuscule une minuscule un nombre et un caractére spécial</span> : null}
        {signUpData.confirmPassword === false ? <span>- Le mot de passe doit être le même que la confirmation de mot de passe</span> : null}
        <Button type={"submit"} text={"Inscription"} />
      </form>
      {signUpData.sendUserInfo === false ? <span>Vous êtes déjà inscrit vous pouvez vous connecter</span> : undefined}
      {signUpData.sendUserInfo && (
          <Navigate to="/" replace={true} />)} 
    </Warpper>
  )
}

export default React.memo(Signup);