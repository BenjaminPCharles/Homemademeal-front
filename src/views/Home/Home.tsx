import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';


const Warpper = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 1em 0;
    }
`;
const Title = styled.div `
    font-family: 'Impact', sans-serif;
    font-size: 2em;
    margin: 1em 0 0 0;
`;

const Text = styled.div `
    font-size: 1.3em;
    text-align: justify;
    margin: 1em 2em;
`;

const BtnNav = styled.div `
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0;
`;

const StyledLink = styled(Link) `
    textDecoration: none;
    color: #BEBEBE;
    display: contents;
`

function Home({userInfos}: any | string) {

  return (
    <Warpper>
        <Title>Bienvenu</Title>
        <img src="../public/img/logo-big.png" alt="" />
        <Text>
            HomeMadeMeal a été pensé pour vous aider au quotidien. Ici, vous pourrez garder vos recettes et enregistrer les ingrédients qui se trouvent dans votre frigo, nous nous chargerons de vous dire ce que vous pouvez cuisiner aujourd'hui. On vous évite de vous poser cette fameuse question :  "que mangeons-nous ce soir ?" 
        </Text>
        <BtnNav>
            <StyledLink to="/signin">
                <Button text={"Se connecter"}/>
            </StyledLink>
            <StyledLink to="/signup">
                <Button text={"Inscription"} /> 
            </StyledLink>
        </BtnNav>
        {userInfos === 'authenticated' ? ( <Navigate to='/profile' replace />) : undefined}
    </Warpper>
  )
}

export default React.memo(Home);