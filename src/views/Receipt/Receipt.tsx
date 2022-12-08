import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import ReceiptInput from '../../components/ReceiptInput/ReceiptInput';
import ReceiptDetails from '../../components/ReceiptDetails/ReceiptDetails';

const Warpper = styled.div `
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
   
`;


function Receipt(){

    const { loading, userInfo, error, success } = useSelector(
        (state: any) => state.user
    )

    const [showModifyReceipt, setShowModifyReceipt] = useState(true);

    return (
        <Warpper>
            <Header />
            {
                showModifyReceipt ? 
                <ReceiptDetails clickedModify={showModifyReceipt} setClickedModify={setShowModifyReceipt} /> : 
                <ReceiptInput clicked={showModifyReceipt} setClicked={setShowModifyReceipt}/>
            }
            <Navigation />
            {loading === 'no-authenticated' && (
                <Navigate to={"/"} replace={true} />
            )}
        </Warpper>
    )
};

export default React.memo(Receipt);