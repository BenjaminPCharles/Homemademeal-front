import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { authenticated } from './features/user/userAction';
import { useAppDispatch } from './app/store';

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
import Loader from './components/Loader/Loader';




import { requestAuthorize } from './requests/userRequests';


const Warpper = styled.div `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

  const dispatch = useAppDispatch();

  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.user
  )

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
    // authRequest();
    // dispatch(authenticated());
    console.log(loading)
  }, [success])

  

  if(loading) {console.log("Checking APPPPPP")}
    if(success) {console.log("Success APPPPPP")}
    if(error === 'auth'){console.log("Error nAPPPPPPP")}

  if (userInfos.isConnect === 'checking') {console.log("Checking")}

  return (
    <Warpper>
      {loading === 'checking' ? <Loader /> : 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile userInfos={userInfos.isConnect} setUserInfos={setUserInfos} /> } />
        <Route path="/search" element={<Search userInfos={userInfos.isConnect} />} />
        <Route path="/ingredients" element={<Ingredients userInfos={userInfos.isConnect} />} />
        <Route path="/receipts" element={<Receipts userInfos={userInfos.isConnect} />} />
        <Route path="/receipt" element={<Receipt userInfos={userInfos.isConnect} />} />
        <Route path="/confirm/:id" element={<EmailConfirm />} />
        <Route path="/google/auth" element={<LoaderGoogleAuth />} />
        {/* CREER UNE 404 */}
        {/* <Route path='*' */}

      </Routes>
      }
    </Warpper>
  )
};

export default App;
