import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Signin from './views/Signin/Signin';
import Profile from './views/Profile/Profile';
import Search from './views/Search/Search';
import Ingredients from './views/Ingredients/Ingredients';
import Receipts from './views/Receipts/Receipts';
import Receipt from './views/Receipt/Receipt';
import EmailConfirm from './views/EmailConfirm/EmailConfirm';
import { useState } from 'react';



const Warpper = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <Warpper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        
        <Route path="/profile" element={<Profile setUserLogged={setIsLogged}/> } />
            
            
         
        <Route path="/search" element={<Search />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/confirm/:id" element={<EmailConfirm />} />
      </Routes>
    </Warpper>
  )
};

export default App;
