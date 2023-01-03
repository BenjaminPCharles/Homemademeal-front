import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import LinkShow from "../../components/LinkShow/LinkShow";
import PaginationSection from "../../components/PaginationSection/PaginationSection";
import ReceiptInput from "../../components/ReceiptInput/ReceiptInput";

const Warpper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  h1 {
    font-size: 1.7em;
  }
  p {
    font-size: 1.3em;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 68vh;
  }
`;

function Receipts() {
  const { user, receipt } = useSelector((state: any) => state);

  const [showAddReceipt, setShowAddReceipt] = useState(true);

  return (
    <Warpper>
      <Header />
      {showAddReceipt ? (
        <main>
          <h1>Recettes</h1>
          <PaginationSection
            text={["Mes recettes", "Autre recettes"]}
            receipts={receipt}
          />
          {/* <PaginationSection text={["Mes recettes","Autre recettes"]} receipts={true} /> */}
          {/* Rajouter props color Link */}
          <LinkShow text={"Rechercher une recette"} color={"078080"} />
          <LinkShow
            text={"Ajouter une recette"}
            color={"078080"}
            clicked={showAddReceipt}
            setClicked={setShowAddReceipt}
          />
        </main>
      ) : (
        <ReceiptInput clicked={showAddReceipt} setClicked={setShowAddReceipt} />
      )}
      <Navigation />
      {user.loading === "no-authenticated" && (
        <Navigate to={"/"} replace={true} />
      )}
    </Warpper>
  );
}

export default React.memo(Receipts);
