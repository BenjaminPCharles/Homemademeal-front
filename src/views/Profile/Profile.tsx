import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PaginationSection from '../../components/PaginationSection/PaginationSection';
import LinkShow from '../../components/LinkShow/LinkShow';
import UserInput from '../../components/UserInput/UserInput';

import { requestAuthorize } from '../../requests/userRequests';


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

function Profile({text}: any | string) {

  const [showModifyProfile, setShowModifyProfile] = useState(true);
  const [userName, setUserName] = useState('');


  const requestInfo = async () => {
    try {
      const auth = await requestAuthorize();
      setUserName(auth.firstName);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(()=> {
    requestInfo();
  }, [showModifyProfile])


  return (
    <Warpper>
      <Header />
      <Info>
        <h1>Bonjour {userName === "" ? "toi !" : userName + " !"}</h1>
        {/* <img src="../public/img/pp.png" alt="" /> */}
        <LinkShow text={"Modifier vos informations"} color={"078080"} setClicked={setShowModifyProfile} clicked={showModifyProfile}/>
      </Info>
      {
        !showModifyProfile ? 
        <UserInput setClicked={setShowModifyProfile} clicked={showModifyProfile} setUserName={setUserName} /> : 
        null
      }
      <PaginationSection text={["Vos recettes favorites"]}/>
      <LinkShow text={"Déconnexion"} color={"078080"} />
      <Navigation />
    </Warpper>
  )
}

export default React.memo(Profile);