import { createSlice } from '@reduxjs/toolkit';
import { Receipt } from '../../interfaces/Receipt';

import { getAllReceipts } from './receiptAction';

interface receiptState {
    loading: 'checking' | 'authenticated' | 'no-authenticated';
    receiptInfo: Receipt;
    error: any;
    success: any;
}

const initialState = {
    loading: 'no-authenticated',
    receiptInfo: {},
    error: null,
    success: null
}  as receiptState

const receiptSlice: any = createSlice({
    name: 'receipt',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    // get Receipt
    builder.addCase(getAllReceipts.pending, (state, action) => {
        state.loading = 'checking'
    })
    builder.addCase(getAllReceipts.fulfilled, (state, action) => {
        state.loading = 'authenticated'
        state.receiptInfo = action.payload
        state.error = null;
    })
    builder.addCase(getAllReceipts.rejected, (state, action) => {
        state.loading = 'no-authenticated'
        state.error = action.payload;
    })
    },
})
      
export default receiptSlice.reducer;