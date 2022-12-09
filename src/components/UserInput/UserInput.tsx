import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

import Button from '../Button/Button';
import LinkShow from '../LinkShow/LinkShow';

import { modifyUser, requestAuthorize } from '../../requests/userRequests';

import { updateUser } from '../../features/user/userAction';
import { useAppDispatch } from '../../app/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UpdateInfos } from '../../interfaces/User';

interface upDataUserData {
    securePassword: boolean | undefined;
    confirmPassword: boolean | undefined;
    sendUserInfo: boolean | undefined;
}


const Warpper = styled.form `
    width: 80vw;
    height: 55vh;
    background-color: #fff;
    border: solid 3px #232323;

    position: absolute;
    top: calc( 50% - 190px);
    text-align: center;
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

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



function UserInput({setClicked, clicked}: any | boolean) {

  const dispatch = useAppDispatch();

  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.user
  )

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const [updateData, setUpdateData] = useState<upDataUserData>({
    //     securePassword: undefined,
    //     confirmPassword: undefined,
    //     sendUserInfo: undefined,
    // })

    // const requestModifyUser = async (firstName: string, secondName: string, password: string) => {
    //     try {
    //         const resultAuth = await requestAuthorize();
    //         if (resultAuth) {
    //             const result = await modifyUser(firstName, secondName, password, resultAuth.id)
    //             if(result){
    //                 setUpdateData({
    //                   securePassword: true,
    //                   confirmPassword: true,
    //                   sendUserInfo: true,
    //                 });
    //               } else {
    //                 setUpdateData({
    //                   securePassword: true,
    //                   confirmPassword: true,
    //                   sendUserInfo: false,
    //                 });
    //               }
    //         }
    //     }catch(err){
    //         console.error(err)
    //     }
    // }

    const onSubmit = async (data: any) => {
        // const passwordSpecialCaractere: RegExp = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$') ;

        // // Check if password contain : uppercase, lowercase, number and special character
        // if(passwordSpecialCaractere.test(data.password) || data.password === ""){
        //     setUpdateData({
        //         securePassword: true,
        //         confirmPassword: false,
        //         sendUserInfo: undefined,
        //     })
        //   console.log("regex ok")
        //   // Check if password is equal to confirmPassword
        //   if(data.password === data.confirmPassword){
        //     setUpdateData({
        //       securePassword: true,
        //       confirmPassword: true,
        //       sendUserInfo: undefined,
        //     })
        //     console.log("confirm ok")
        //     // CALL secure 
        //     requestModifyUser(data.firstName, data.secondName, data.password)
        //   } else {
        //     setUpdateData({
        //       securePassword: true,
        //       confirmPassword: false,
        //       sendUserInfo: undefined,
        //     })
        //   }
        // } else {
        //     setUpdateData({
        //     securePassword: false,
        //     confirmPassword: false,
        //     sendUserInfo: undefined,
        //   })
        // }
        const userInfos = {
          firstName: data.firstName,
          secondName: data.secondName,
          password: data.password,
          confirmPassword: data.confirmPassword,
          id: userInfo.id
        } as UpdateInfos;
    
        dispatch(updateUser(userInfos)).then(() => {
        });
    }

    return (
        <Warpper onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Prenom' {...register("firstName")} />
            <input type="text" placeholder='Nom' {...register("secondName")} />
            <input type="password" placeholder='Mot de passe' minLength={8} {...register("password")}/>
            <input type="password"  placeholder='Confirmation de mot de passe' {...register("confirmPassword")} />
            {/* {updateData.securePassword === false ? <span>- Le mot de passe doit contenir au moins une majuscule une minuscule un nombre et un caractére spécial</span> : null}
            {updateData.confirmPassword === false ? <span>- Le mot de passe doit être le même que la confirmation de mot de passe</span> : null} */}
            <Button text={"Modifier le profil"} />
            {error && error.status === "update" ? <span>{error.message}</span> : null}
            <LinkShow text={"Retour"} setClicked={setClicked} clicked={clicked}/>
        </Warpper>
    )
}

export default React.memo(UserInput);