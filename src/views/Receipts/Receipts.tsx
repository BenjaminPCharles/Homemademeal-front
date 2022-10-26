import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Link from '../../components/Link/Link';
import PaginationSection from '../../components/PaginationSection/PaginationSection';

const Warpper = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;

    h1 {
        font-size: 1.7em;
    }
    p {
        font-size: 1.3em;
    }
    main {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 68vh;
        div {
            margin: 4em 0;
        }
        p {
            margin-bottom: 1em;
        }
    }
`;


function Receipts(){
    return (
        <Warpper>
            <Header />
            <main>
                <h1>Recettes</h1>
                <PaginationSection text={["",""]}/>
                {/* Rajouter props color Link */}
                <Link text={"Rechercher une recette"} />
                <Link text={"Ajouter une recette"} />
            </main>
            <Navigation />
        </Warpper>
    )
};

export default React.memo(Receipts);