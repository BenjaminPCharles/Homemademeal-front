import React from 'react';
import styled from 'styled-components';

const Warpper = styled.div `
    width: 80vw;
    height: 50vh;
    background-color: #fff;
    border: solid 3px #232323;

    position: absolute;
    top: calc( 50% - 200px);
    text-align: center;
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    p {
        font-size: 1.2em;
        margin-bottom: .5em;
    }
`;

function ConfirmationSignup() {
    return (
        <Warpper>
            <div>
                <p>Vous devez maintenant confirmer votre mot de passe. Nous avons envoyé un petit lien dans votre boite mail</p>
                <p>Pensez a vérifier vos spam</p>
            </div>
            <p>Renvoyer le liens</p>
        </Warpper>
    )
};

export default React.memo(ConfirmationSignup);