import React from 'react';
import styled from 'styled-components';


import Link from '../Link/Link';

const Warpper = styled.nav `
    width: 80vw;
    height: 50vh;
    background-color: #fff;
    border: solid 3px #232323;

    position: absolute;
    top: calc( 50% - 180px);
    text-align: center;
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    ul {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-right: .5em;
    }
    nav {
        ol {
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li {
                margin: .3em 0 .3em 0;
            }
        }
        li:first-child {
            color: #078080;
        }
        li:not(:first-child):not(:last-child) {
            color: #e16162;
            margin-bottom: 1em;
        }
    }
`;

function DetailsIngredient({clickedReturn, setClickedReturn, clickedModify, setClickedModify, name}: any | boolean | string) {
    return (
        <Warpper>
            <ul>
                <li><p>{name}</p></li>
                <li><p>300</p><p>G</p></li>
            </ul>
            <nav>
                <ol>
                    <li><Link text={"Modifier l'ingrédient"} clicked={clickedModify} setClicked={setClickedModify} /></li>
                    <li><p>Supprimer l'ingrédient</p></li>
                    <li><Link text={"Retour"} clicked={clickedReturn} setClicked={setClickedReturn} /></li>
                </ol>
            </nav>
        </Warpper>
    )
}

export default React.memo(DetailsIngredient);