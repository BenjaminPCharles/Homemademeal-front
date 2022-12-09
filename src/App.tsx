import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

import { authenticated } from './features/user/userAction';
import { useAppDispatch } from './app/store';
import { useEffect } from 'react';

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

  useEffect(() => {
    dispatch(authenticated());
}, [success])

  return (
    <Warpper>
      {loading === 'checking' ? <Loader /> : 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile /> } />
        <Route path="/search" element={<Search />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/receipt" element={<Receipt />} />
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
