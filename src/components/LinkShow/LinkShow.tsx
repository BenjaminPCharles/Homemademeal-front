import React from "react";
import styled from "styled-components";



function LinkShow({text, clicked, setClicked, color}: any | string | boolean){

    const Warpper = styled.p `
        color: #${color};
        cursor: pointer;
    `;

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <Warpper onClick={handleClick}>
            {text}
        </Warpper>
    )
}

export default React.memo(LinkShow);