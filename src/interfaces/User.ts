export interface User { 
    _id?: number;
    firstName: string;
}

export interface UserSignup { 
    email: string;
    password: string;
    confirmPassword: string;
}
