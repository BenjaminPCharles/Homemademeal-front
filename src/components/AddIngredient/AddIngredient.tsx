import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import LinkShow from '../LinkShow/LinkShow';

const Warpper = styled.form `
    width: 80vw;
    height: 50vh;
    background-color: #fff;
    border: solid 3px #232323;

    background: #f8f5f2;
    position: absolute;
    top: calc( 50% - 180px);
    text-align: center;
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    input{
        border: solid 3px #232323;
        border-radius: 25px;
        padding: 0.8em 6.1em 0.5em 1em;
        margin: .5em 0;
    }

    select {
        border: solid 3px #232323;
        border-radius: 25px;
        padding: 0.8em 4em 0.5em 1em;
        margin: .5em 0;
    }
`;

function AddIngredient({clicked, setClicked}: any | boolean | string) {
    return (
        <Warpper>
            <input type="text" name="" id="" placeholder="Nom de l'ingrédient"/>
            <input type="number" name="" id="" placeholder="Nombre/Poids de l'ingrédient"/>
            <select name="" id="">
                <option value="">Choisiser une unité de mesure</option>
                <option value="">Gramme</option>
                <option value="">Unité</option>
                <option value="">Litre</option>
                <option value="">ml</option>
            </select>
            <Button text={"Ajouter l'ingrédient"} />
            <LinkShow text={"Retour"} clicked={clicked} setClicked={setClicked} />
        </Warpper>
    )
}

export default React.memo(AddIngredient);