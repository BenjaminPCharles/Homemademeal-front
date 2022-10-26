import React from "react";
import styled from "styled-components";

const Warpper = styled.p ``;

function Link({text, clicked, setClicked}: any | string | boolean){

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <Warpper onClick={handleClick}>
            {text}
        </Warpper>
    )
}

export default React.memo(Link);