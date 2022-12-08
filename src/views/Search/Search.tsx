import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PaginationSection from '../../components/PaginationSection/PaginationSection';

const Warpper = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;


function Search(){

    const { loading, userInfo, error, success } = useSelector(
        (state: any) => state.user
    )

    return (
        <Warpper>
            <Header />
            <PaginationSection text={["Tous","Vos recettes du jour", "Nos recettes du jour"]} clickable={true} />
            <PaginationSection text={["Les recettes ou il manque un petit quelque chose"]}  />
            <Navigation />

           {loading === 'no-authenticated' && (
                <Navigate to={"/"} replace={true} />
            )}

        </Warpper>
    )
};

export default React.memo(Search);