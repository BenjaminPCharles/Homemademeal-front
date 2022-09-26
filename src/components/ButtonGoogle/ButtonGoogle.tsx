import React, {ReactComponentElement, useState} from 'react';
import styled from 'styled-components';

function ButtonGoogle({text}: any & String) {

  const [isClicked, setIsClicked] = useState(true);

  const Warpper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justidy-content : center;
    margin: 1em 0 0 0;
    font-size: 1.2em;

    img {
        width: 4em;
        margin: 1em 0;
        border: 2px solid #232323;
        border-radius: 25px;
        padding: .5em;
        box-shadow: ${isClicked ? "2px 2px 6px #232323": "inset 2px 2px 6px #232323"};
    }
  `;

  const handleClick = ({text}: any & String) => {
    setIsClicked(!isClicked)
  }

  return (
    <Warpper onClick={handleClick}>
        <p>{text} avec</p>
        <img onClick={handleClick} src="../public/img/google.png" alt="" />
        <p>ou</p>
    </Warpper>
  )
};

export default React.memo(ButtonGoogle);