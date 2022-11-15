import React, { useState } from 'react';
import styled from 'styled-components';

import LinkShow from '../LinkShow/LinkShow';
import { Link } from 'react-router-dom';


const Warpper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 65vh;
    overflow: scroll;
    div {
        margin: 4em 0;
    }
    p {
        margin-bottom: 1em;
    }
    ul {
        margin-bottom: 1em;
        list-style-type: circle;
        width: 80vw;
        p {
            margin-bottom: 0;
        }
    }
    ol {
        margin-bottom: 2em;
    }
`;

const LinkReactRouter = styled(Link) `
    text-decoration: none;
    font-size: 1.3em;
    color: #000;
`;


function ReceiptDetails({clickedModify, setClickedModify}: any | boolean) {

    const ingredients: string[] = ["Carootes", "Bouillon de légume", "Creme fleurette", "Beurre", "Sel", "Poivre"];
    const steps: string[] = ["Couper les carottes", "Faire fondre le beurre dans une poil", "Plongée les carottes","Verser le bouillont jusqu'a recouvrire toute les carottes", "Plongée les carottes","Verser le bouillont jusqu'a recouvrire toute les carottes", "Plongée les carottes","Verser le bouillont jusqu'a recouvrire toute les carottes", "Plongée les carottes","Verser le bouillont jusqu'a recouvrire toute les carottes Verser le bouillont jusqu'a recouvrire toute les carottes Verser le bouillont jusqu'a recouvrire toute les carottes Verser le bouillont jusqu'a recouvrire toute les carottes Verser le bouillont jusqu'a recouvrire toute les carottes Verser le bouillont jusqu'a recouvrire toute les carottes "];

    return (
        <Warpper>
            <h1>Puré de carotte</h1>
            <ul>
            {ingredients.map((ingredient: string, index:number) => {
                return <li key={index}>
                        <p>{ingredient}</p>
                    </li>
            })}
            </ul>
            <ol>
                {steps.map((step: string, index:number) => {
                    return <li key={index}>
                        <p>{step}</p>
                    </li>
                })}
            </ol>
            <LinkShow text={"Modifier la recette"} color={"078080"} clicked={clickedModify} setClicked={setClickedModify}/>
            <LinkShow text={"Supprimer la recette"} color={"e16162"} />
            <LinkReactRouter to='/receipts'> Retour </LinkReactRouter>
        </Warpper>
    )
}

export default React.memo(ReceiptDetails);