import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Signin from './views/Signin/Signin';
import Profile from './views/Profile/Profile';
import Search from './views/Search/Search';
import Ingredients from './views/Ingredients/Ingredients';
import Receipts from './views/Receipts/Receipts';
import Receipt from './views/Receipt/Receipt';
import EmailConfirm from './views/EmailConfirm/EmailConfirm';
import LoaderGoogleAuth from './components/LoaderGoogleAuth/LoaderGoogleAuth';
import { useEffect, useState } from 'react';


import { requestAuthorize } from './requests/userRequests';
import Loader from './components/Loader/Loader';


const Warpper = styled.div `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  const [userInfos, setUserInfos] = useState({
    isConnect: "",
    id: undefined,
    firstName: undefined,
  });

  const authRequest = async () => {
    console.log('le début')
    try {
      setUserInfos({
        isConnect : 'checking',
        id: undefined,
        firstName: undefined,
      })
      const auth = await requestAuthorize();
      console.log('La requete')
      if(auth) {
        console.log("ici" + auth)
        setUserInfos({
          isConnect : 'authenticated',
          id : auth.id,
          firstName : auth.firstName
        })
      } else {
        console.log("la" + auth)
        setUserInfos({
          isConnect : 'no-authenticated',
          id : undefined,
          firstName : undefined
        })
      }
    }catch(err) {
      console.error(err)
    }
  }

  useEffect(() => {
    authRequest();
    console.log(userInfos)
  }, [])


  console.log(userInfos)
  
  if (userInfos.isConnect === 'checking') {console.log("Checking")}

  return (
    <Warpper>
      {userInfos.isConnect === 'checking' ? <Loader /> : 
      <Routes>
        <Route path="/" element={<Home userInfos={userInfos.isConnect} />} />
        <Route path="/signup" element={<Signup userInfos={userInfos.isConnect} />} />
        <Route path="/signin" element={<Signin userInfos={userInfos.isConnect} setUserInfos={setUserInfos}/>} />
        <Route path="/profile" element={<Profile userInfos={userInfos.isConnect} setUserInfos={setUserInfos} /> } />
        <Route path="/search" element={<Search userInfos={userInfos.isConnect} />} />
        <Route path="/ingredients" element={<Ingredients userInfos={userInfos.isConnect} />} />
        <Route path="/receipts" element={<Receipts userInfos={userInfos.isConnect} />} />
        <Route path="/receipt" element={<Receipt userInfos={userInfos.isConnect} />} />
        <Route path="/confirm/:id" element={<EmailConfirm />} />
        <Route path="/test" element={<LoaderGoogleAuth />} />
        {/* CREER UNE 404 */}
        {/* <Route path='*' */}

      </Routes>
      }
    </Warpper>
  )
};

export default App;
