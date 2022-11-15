import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';


function PaginationSection({text, clickable, receipts}: any | boolean | string[]) {

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

    const LinkReactRouter = styled(Link) `
        text-decoration: none;
        font-size: 1.3em;
        color: #078080;
    `;
    
    return (
        <Warpper>
            <aside>
                {text.map((title: string, index: number) => {
                    return <p key={index}>{title}</p>
                })}
            </aside>
            <section>
                { receipts ? <LinkReactRouter to="/receipt" >Purrée de carottes</LinkReactRouter> : undefined}
            </section>
        </Warpper>
    )
}

export default React.memo(PaginationSection);