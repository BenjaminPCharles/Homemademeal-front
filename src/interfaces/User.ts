export interface User { 
    _id?: number;
    firstName: string;
    googleAuth: boolean;
}

export interface UserSignup { 
    email: string;
    password: string;
    confirmPassword: string;
}


export interface UpdateInfos {
    firstName: string;
    secondName: string;
    password: string;
    confirmPassword: string;
    id: number;
}