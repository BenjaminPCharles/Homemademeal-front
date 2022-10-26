import React, {JSXElementConstructor, useState} from 'react';
import styled from 'styled-components';
import { JsxElement } from 'typescript';

function Button({text, type}: any | String | Boolean){

  const Warpper = styled.button `
      border: none;
      text-align: center;
      width: 90%;
      padding: .8em 3em;
      margin: 1em 0;
      color: #fff;
      background-color: #078080;
      box-shadow: 2px 2px 6px #232323;
      border-radius: 25px;

      font-family: 'Impact', sans-serif;
      font-size: 1.1em;

      :active {
        box-shadow:inset 2px 2px 6px #232323;
      }
  `;
  
  return (
   <Warpper type={type} data-testid={"button"}>
    { text }
   </Warpper>
  )
};

export default React.memo(Button);