import styled from 'styled-components';
import { Routes, Route, Navigate  } from 'react-router-dom';

import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Signin from './views/Signin/Signin';
import Profile from './views/Profile/Profile';
import Search from './views/Search/Search';
import Ingredients from './views/Ingredients/Ingredients';
import Receipts from './views/Receipts/Receipts';
import EmailConfirm from './views/EmailConfirm/EmailConfirm';

const Warpper = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

function App() {
  return (
    <Warpper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/recettes" element={<Receipts />} />
        <Route path="/confirm/:id" element={<EmailConfirm />} />
      </Routes>
    </Warpper>
  )
};

export default App;
