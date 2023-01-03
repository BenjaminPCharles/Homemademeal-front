import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { requestsConfirmEmail } from '../../requests/userRequests';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

interface confirmData {
    userIdToConfirm: boolean | undefined
}

const Warpper = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    p {
        font-size: 1.2em;
        margin: 5em 2em;
        text-align: justify;
    }
`;

const StyledLink = styled(Link) `
    textDecoration: none;
    color: #BEBEBE;
    display: contents;
`

function EmailConfirm() {

    let { id } = useParams();

    const [userConfirm, setUserConfirm] = useState<confirmData>({
        userIdToConfirm: undefined,
    })

    const requestConfirm = async(id: string) => {
        try {
            // const replaceByDots: string = id.replace(/\-/g,'.')
            const result = await requestsConfirmEmail(id)
            if(result) {
                setUserConfirm({
                    userIdToConfirm: true,
                })
            }
        }catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        requestConfirm(id!)
    }, [setUserConfirm])

    return (
        <Warpper>
            <Header></Header>
            <p>Vous venez de confirmer votre compte vous pouvez maintenant vous connecter a votre compte</p>
            <StyledLink to="/Signin">
                <Button text={"Connection"} /> 
            </StyledLink>
        </Warpper>
    )
} 

export default React.memo(EmailConfirm);