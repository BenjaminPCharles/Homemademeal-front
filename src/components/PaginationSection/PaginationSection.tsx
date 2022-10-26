import React from 'react';
import styled from 'styled-components';


function PaginationSection({text, clickable}: any | boolean | string[]) {

    const Warpper = styled.div `
    text-align: center;

    aside {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    p {
        font-size: 1.3em;
        margin-bottom: .5em;
        color: ${clickable ? '#078080' : '#232323'};
    }

    section {
        width: 80vw;
        height: 10em;
        background-color: #fff;
        border: solid 3px #232323;
    }
`;
    
    return (
        <Warpper>
            <aside>
                {text.map((title: string) => {
                    return <p key={title}>{title}</p>
                })}
            </aside>
            <section></section>
        </Warpper>
    )
}

export default React.memo(PaginationSection);