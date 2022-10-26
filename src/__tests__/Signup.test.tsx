import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";


import Signup from "../views/Signup/Signup";

describe('Signup', () => {

    test('Should render without crash', async () => {
        render(<Signup />)
    })
    
})