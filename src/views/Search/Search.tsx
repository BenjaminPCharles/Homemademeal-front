import React from 'react';
import styled from 'styled-components';

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
    return (
        <Warpper>
            <Header />
            <PaginationSection text={["Tous","Vos recettes du jour", "Nos recettes du jour"]} clickable={true} />
            <PaginationSection text={["Les recettes ou il manque un petit quelque chose", ""]}  />
            <Navigation />
        </Warpper>
    )
};

export default React.memo(Search);