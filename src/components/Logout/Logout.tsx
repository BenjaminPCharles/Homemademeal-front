import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { logout } from '../../features/user/userAction';
import { useAppDispatch } from '../../app/store';

function Logout({text, color}: any | string | boolean){

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const Warpper = styled.p `
        color: #${color};
        cursor: pointer;
    `;

    const handleClick = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <Warpper onClick={handleClick}>
            {text}
        </Warpper>
    )
}

export default React.memo(Logout);