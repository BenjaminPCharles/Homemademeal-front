import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/User'

import { userLogin, userSignup, authenticated, logout, updateUser } from './userAction';

interface userState {
    loading: 'checking' | 'authenticated' | 'no-authenticated';
    userInfo: User;
    error: any;
    success: any;
}

const initialState = {
    loading: 'no-authenticated',
    userInfo: {},
    error: null,
    success: null
}  as userState
  
const userSlice: any = createSlice({
name: 'user',
initialState,
reducers: {},
extraReducers: (builder) => {
    // Login
    builder.addCase(userLogin.pending, (state, action) => {
        state.loading = 'checking'
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
        state.loading = 'authenticated'
        state.success = action.payload
        state.error = null;
    })
    builder.addCase(userLogin.rejected, (state, action) => {
        state.loading = 'no-authenticated'
        state.error = action.payload;
    })
    // Signup
    builder.addCase(userSignup.pending, (state, action) => {
        state.loading = 'checking'
    })
    builder.addCase(userSignup.fulfilled, (state, action) => {
        state.loading = 'no-authenticated'
        state.success = action.payload
        state.error = null;
    })
    builder.addCase(userSignup.rejected, (state, action) => {
        state.loading = 'no-authenticated'
        state.error = action.payload;
    })
    // Auth
    builder.addCase(authenticated.pending, (state, action) => {
        state.loading = 'checking'
    })
    builder.addCase(authenticated.fulfilled, (state, action) => {
        state.loading = 'authenticated'
        state.userInfo = action.payload
        state.error = null;
    })
    builder.addCase(authenticated.rejected, (state, action) => {
        state.loading = 'no-authenticated'
        state.error = action.payload;
    })
    // Logout
    builder.addCase(logout.pending, (state, action) => {
        state.loading = 'checking'
    })
    builder.addCase(logout.fulfilled, (state, action) => {
        state.loading = 'no-authenticated';
        state.userInfo = action.payload;
        state.error = null;
        state.success = null;
    })
    builder.addCase(logout.rejected, (state, action) => {
        state.loading = 'authenticated'
        state.error = action.payload;
    })
    // Update 
    builder.addCase(updateUser.pending, (state, action) => {
        state.loading = 'checking'
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
        state.loading = 'authenticated'
        state.success = action.payload
        state.error = null;
    })
    builder.addCase(updateUser.rejected, (state, action) => {
        state.loading = 'authenticated'
        state.error = action.payload;
    })
},
})
  
  export default userSlice.reducer;