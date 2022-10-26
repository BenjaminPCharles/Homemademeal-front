import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import DetailsIngredient from '../../components/DetailsIngredient/DetailsIngredient';
import AddIngredient from '../../components/AddIngredient/AddIngredient';
import Link from '../../components/Link/Link';

const Warpper = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;

    p {
        font-size: 1.3em;
    }
    h1 {
        font-size: 1.7em;
    }
`;

const List = styled.nav `

    width: 80vw;
    height: 50vh;
    overflow: scroll;
    li {
        margin-bottom: .5em;
        justify-content: space-around;
        display: flex;
        p {
            width : 60vw;
        }
        aside {
            color: #e16162;
        }
    }
`;

function Ingredients(){

    const [isClicked, setIsClicked] = useState(true);
    const [addIsClicked, setAddIsClicked] = useState(true);
    const [ingredientName, setIngredientName] = useState("");

    const handleClick = (e: any) => {
        setIsClicked(!isClicked);
        setIngredientName(e.target.innerText)
    };

    const addHandleClick = () => {
        console.log("lfj,dsmlfjsd")
        setAddIsClicked(!addIsClicked);
    };

    const ingredients: string[] = ['poivre noir', 'salade', 'poulet','oeufs', 'salade', 'poulet','oeufs', 'salade', 'poulet','oeufs', 'salade', 'poulet','poivre noir', 'salade', 'poulet','oeufs', 'salade', 'poulet','oeufs', 'salade', 'poulet','oeufs', 'salade', 'poulet'];

    return (
        <Warpper>
            <Header />
            <h1>Ingredients</h1>
            <List>
                {ingredients.map((ingredient: string, index:number) => {
                    return <li key={index}>
                            <p onClick={handleClick}>{ingredient}</p> <aside>X</aside>
                        </li>
                })}
            </List>
            {!isClicked ? <DetailsIngredient clickedReturn={isClicked} setClickedReturn={setIsClicked} clickedModify={addIsClicked} setClickedModify={setAddIsClicked} name={ingredientName}/> : undefined}
            <Link clicked={addIsClicked} setClicked={setAddIsClicked} text={"Ajouter un ingrédient"} />
            {!addIsClicked ? <AddIngredient clicked={addIsClicked} setClicked={setAddIsClicked}/> : undefined}
            <Navigation />
        </Warpper>
    )
};

export default React.memo(Ingredients);