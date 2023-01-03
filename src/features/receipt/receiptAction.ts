import { createAsyncThunk } from '@reduxjs/toolkit';
import { Receipt } from '../../interfaces/Receipt';
import { requestGetReceipt } from '../../requests/receiptRequests';

export const getAllReceipts = createAsyncThunk<any, any>(
    'receipt/getAll', 
    async (data, thunkAPI) => {
        console.log(data)
        console.log(typeof data)
        const response = await requestGetReceipt(data);
        console.log(response)
        if(response){
            return response;
        }
        return thunkAPI.rejectWithValue("fdsfsdf")
    }
);