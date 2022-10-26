import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";


import Signin from "../views/Signin/Signin";

describe('Signin', () => {

    test('Should render without crash', async () => {
        render(<Signin />)
    })
    
})