import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'

import { requestsLogin, requestAuthorize } from '../../requests/userRequests';

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

function Signin({userInfos, setUserInfos}: any | string) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ signInData, setSignInData ] = useState<SignInData>({
    sendUserInfo: undefined,
  })

  const signinRequest = async(email: string, password: string) => {
    try {
      setUserInfos({
        isConnect : 'checking'
      })
      const result = await requestsLogin(email, password);
      if(result){
        // const auth = await requestAuthorize();
        // if(auth){
          setUserInfos({
            isConnect : 'authenticated'
          })
          setSignInData({
            sendUserInfo: true,
          });
        } else {
          setSignInData({
            sendUserInfo: false,
          });
        // } 
      }
    }catch(err) {
      console.error(err)
    }
  }

  const onSubmit = (data: any) => {
    signinRequest(data.email, data.password)
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
      {signInData.sendUserInfo === false ? <span>Vous devez vous inscrire ou confimer votre compte regardez dans votre boite mail</span> : null}
      {/* {signInData.sendUserInfo && (
          <Navigate to='/profile' replace />)}  */}
      {userInfos === 'authenticated' ? ( <Navigate to='/profile' replace />) : undefined}
    </Warpper>
  )
}

export default React.memo(Signin);