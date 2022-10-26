import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PaginationSection from '../../components/PaginationSection/PaginationSection';


const Warpper = styled.div `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.3em;
    font-weight: 400;
  }
  img {
    margin: 2em 0 1.5em 0;
  }
  p {
    font-size: 1.1em;
    font-style: italic;
    color: #078080;
    cursor: pointer;
  }
`;

// const Receipt = styled.div `
//   text-align: center;

//   p {
//     font-size: 1.3em;
//     margin-bottom: .5em;
//   }

//   section {
//     width: 80vw;
//     height: 10em;
//     background-color: #fff;
//     border: solid 3px #232323;
//   }
// `;

function Profile({text}: any | string) {

  return (
    <Warpper>
      <Header />
      <Info>
        <h1>Bonjour Benjamin</h1>
        <img src="../public/img/pp.png" alt="" />
        <p>Modifier vos informations</p>
      </Info>
      <PaginationSection text={["Vos recettes favorites", ""]}/>
      {/* <Receipt>
        <p>Vos recettes favorites</p>
        <section></section>
      </Receipt> */}
      <Navigation />
    </Warpper>
  )
}

export default React.memo(Profile);