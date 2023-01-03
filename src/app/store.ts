import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../features/user/userSlice'
import receiptReducer from '../features/receipt/receiptSlice'


export const store = configureStore({
    reducer : { 
        user : userReducer,
        receipt: receiptReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
