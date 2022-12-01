import React from "react";
import styled from "styled-components";





function Loader(){

    const Warpper = styled.div `
        width: 100%;
        height: 50%;
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
    const Logo = styled.div `
        background-image: url(../img/loader.svg);
        background-position: center;
        background-repeat: no-repeat;
        height: 10em;
        width: 10em;

        border-radius: 50%;

        -webkit-animation:spin 4s linear infinite;
        -moz-animation:spin 4s linear infinite;
        animation:spin 4s linear infinite;

        @-moz-keyframes spin { 
            100% { -moz-transform: rotate(360deg); } 
        }
        @-webkit-keyframes spin { 
            100% { -webkit-transform: rotate(360deg); } 
        }
        @keyframes spin { 
            100% { 
                -webkit-transform: rotate(360deg); 
                transform:rotate(360deg); 
            } 
        }
    `;

    const Text = styled.p `
        font-size: 2em;
        margin: 0 auto;
    `;


    return (
        <Warpper>
            <Logo />
            <Text> CHARGEMENT...</Text>
        </Warpper>
    )
}

export default React.memo(Loader);