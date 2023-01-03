
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserSignup, UpdateInfos } from '../../interfaces/User';

import { signupVerificationPassword } from '../../utils/signupVerifications';
import { requestsLogin, requestsAddUsers, requestAuthorize, requestLogout, modifyUser } from '../../requests/userRequests';

export const userLogin = createAsyncThunk<User, any>(
    'user/login',
    async (data, thunkAPI) => {
        const { email, password } = data;
        const reponse = await requestsLogin(email, password);
        if(reponse === "Logged success") {
            console.log(reponse)
            return reponse;
        }else {
            return thunkAPI.rejectWithValue({
                status: "login",
                message: "Vous devez vous inscrire ou confimer votre compte regardez dans votre boite mail",
            });
        }
    }
)

export const userSignup = createAsyncThunk<UserSignup, any>(
    'user/signup',
    async (data, thunkAPI) => {
        const { email, password, confirmPassword } = data;
        const passwordCheck = signupVerificationPassword(password, confirmPassword);
        if(passwordCheck === "Success") {
            const response: any = await requestsAddUsers(email, password);
            if(response === "Signup success"){
                return response;
            }else {
                return thunkAPI.rejectWithValue({
                    status: "signup",
                    message: "Vous êtes déjà inscrit vous pouvez vous connecter",
                });
            }
        }else {
            return thunkAPI.rejectWithValue({
                status: "signup",
                message: passwordCheck,
            });
        }
    }
)

export const authenticated = createAsyncThunk(
    'user/auth',
    async (data, thunkAPI) => {
        const response: any = await requestAuthorize();

        if(response === "not-auth"){
            return thunkAPI.rejectWithValue("auth");
        }else {
            return response;
        }
    }
)

export const logout = createAsyncThunk(
    'user/logout',
    async (data, thunkAPI) => {
        const response: any = await requestLogout();

        if(response === "Logout"){
            return {
                firstName: "",
                googleAuth: false
            }
        }else {
            return thunkAPI.rejectWithValue("logout");
        }
    }
)


export const updateUser = createAsyncThunk<UpdateInfos, any>(
    'user/update',
    async (data, thunkAPI) => {
        const { firstName, secondName, password, confirmPassword, id } = data;
        
        if(password) {
            const passwordCheck = signupVerificationPassword(password, confirmPassword);
            if(passwordCheck === "Success") {
                const response: any = await modifyUser(firstName, secondName, password, id);
                if(response === "Update success"){
                    return response;
                }else {
                    return thunkAPI.rejectWithValue({
                        status: "update",
                        message: "Modification de l'utilisateur impossible",
                    });
                }
            }else {
                return thunkAPI.rejectWithValue({
                    status: "update",
                    message: passwordCheck,
                });
            }
        }else {
            const response: any = await modifyUser(firstName, secondName, password, id);
            if(response === "Update success"){
                return response;
            }else {
                return thunkAPI.rejectWithValue({
                    status: "update",
                    message: "Modification de l'utilisateur impossible",
                });
            }
        }
    }
)