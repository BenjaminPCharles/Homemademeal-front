import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAllReceipts } from '../../features/receipt/receiptAction';
import { useAppDispatch } from '../../app/store';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PaginationSection from '../../components/PaginationSection/PaginationSection';
import LinkShow from '../../components/LinkShow/LinkShow';
import UserInput from '../../components/UserInput/UserInput';
import Logout from '../../components/Logout/Logout';

const Warpper = styled.div `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 1.3em;
  }
`;

const Info = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5em;
    font-weight: 400;
    margin: 0 0 3em 0;
  }
  img {
    margin: 2em 0 1.5em 0;
  }
  p {
    font-size: 1.3em;
    cursor: pointer;
  }
`;

function Profile() {

  // const { loading, userInfo, error, success } = useSelector(
  //   (state: any) => state.user
  // )
  const dispatch = useAppDispatch();
    
  const { user, receipt } = useSelector(
      (state: any) => state
  )


  const [showModifyProfile, setShowModifyProfile] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(()=> {
    dispatch(getAllReceipts(user.userInfo.id))
    if(user.error && user.error.status === "update"){
      setShowModifyProfile(false);
    }
  }, [user.error])

  console.log(user.userInfo.firstName)

  return (
    <Warpper>
      <Header />
      <Info>
        <h1>Bonjour {user.userInfo.firstName === undefined ? "toi !" : user.userInfo.firstName + " !"}</h1>
        {/* <img src="../public/img/pp.png" alt="" /> */}
        {user.userInfo.googleAuth ? null : <LinkShow text={"Modifier vos informations"} color={"078080"} setClicked={setShowModifyProfile} clicked={showModifyProfile}/>}
       
      </Info>
      
      {
        !showModifyProfile ? 
        <UserInput setClicked={setShowModifyProfile} clicked={showModifyProfile} setUserName={setUserName} /> : 
        null
      }
     
      <PaginationSection text={["Vos recettes favorites"]}/>
      <Logout text={"Déconnexion"} color={"078080"} />
      <Navigation />
      {user.loading === 'no-authenticated' && (
            <Navigate to={"/"} replace={true} />
      )}
    </Warpper>   
  )
}

export default React.memo(Profile);