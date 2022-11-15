import React, { useState } from 'react';
import styled from 'styled-components';

import LinkShow from '../LinkShow/LinkShow';


const Warpper = styled.form `
    overflow: scroll;
    width: 100vw;
    text-align: center;
    height: 63vh;
    p {
        font-size: 1.3em;
    }
    p:not(:last-child) {
        color: #078080;
    }
    input{
        border: solid 3px #232323;
        border-radius: 25px;
        padding: 0.8em 6.1em 0.5em 1em;
        margin: .5em 0;
    }
    textarea {
        border: solid 3px #232323;
        border-radius: 25px;
        padding: 0.8em 6.1em 0.5em 1em;
        margin: .5em 0;
    }
    section {
        margin: 1em 0 1em 0;
        input {
            border: solid 3px #232323;
            border-radius: 25px;
            padding: 0.8em 6.1em 0.5em 1em;
            margin: .5em 0;
        }
        input[type=number] {
            border: solid 3px #232323;
            border-radius: 25px;
            padding: 0.8em .5em 0.5em .5em;
            margin: .5em 0;
            width: 25vw;
        }
        select {
            border: solid 3px #232323;
            border-radius: 25px;
            padding: 0.8em 4em 0.5em 1em;
            margin: .5em 0;
            width: 40vw;
        }
    }
`;


function ReceiptInput({clicked, setClicked}: any | boolean) {

    const [numberOfTextAera , setNumberOfTextAera] = useState(0);
    const [numberOfInput , setNumberOfInput] = useState(0);

    const handleClickStep = () => {
        setNumberOfTextAera(numberOfTextAera +1)
    }
    
    const handleClickInput = () => {
        setNumberOfInput(numberOfInput +1)
    }

    return (
        <Warpper>
                <input type="text" placeholder="Titre de la recette" />
                {Array.from(Array(numberOfInput), (e, i) => {
                    return <section key={i}>
                        <input type="text" placeholder={`Nom du ${i + 1} ingredient`}/>
                        <input type="number" placeholder={`${i + 1} ingredient`}/>
                        <select name="" id="">
                            <option value="">{`${i + 1} Unité`}</option>
                        </select>
                    </section>
                })}
                <p onClick={handleClickInput}>Ajouter un ingredient</p>
                {Array.from(Array(numberOfTextAera), (e, i) => {
                    return <textarea key={i} placeholder={`Etape numero ${i + 1}`} ></textarea>
                })}
                <p onClick={handleClickStep}>Ajouter une étape</p>
                <LinkShow text={"Retour"} clicked={clicked} setClicked={setClicked}/>
        </Warpper>
    )
}

export default React.memo(ReceiptInput);