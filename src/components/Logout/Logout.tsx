import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { requestLogout } from '../../requests/userRequests';


function Logout({text, color, setUserInfos}: any | string | boolean){

    const Warpper = styled.p `
        color: #${color};
        cursor: pointer;
    `;

    const requestToLogout = async () => {
        try {
          await requestLogout();
        }catch(err) {
          console.error(err);
        }
    }

    const navigate = useNavigate();

    const handleClick = () => {
        requestToLogout();
        setUserInfos({
            isConnect : 'no-authenticated',
            id : undefined,
            firstName : undefined
          })
        navigate('/')
    }

    return (
        <Warpper onClick={handleClick}>
            {text}
        </Warpper>
    )
}

export default React.memo(Logout);