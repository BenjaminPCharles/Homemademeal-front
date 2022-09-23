import React, {useState} from 'react';
import styled from 'styled-components';

function Button({text}: any & String) {

  const [isClicked, setIsClicked] = useState(true);

  const Warpper = styled.div `
    text-align: center;
    width: 45%;
    padding: .8em 2em;
    margin: 1em 0;
    color: #fff;
    background-color: #078080;
    box-shadow: ${isClicked ? "2px 2px 6px #232323": "inset 2px 2px 6px #232323"};
    border-radius: 25px;

    font-family: 'Impact', sans-serif;
  `;

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <Warpper onClick={handleClick}>
      {text}
    </Warpper>
  )
};

export default React.memo(Button);