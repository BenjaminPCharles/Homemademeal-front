import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5789'
})

// Google auth

export async function requestGoogleAuth() {
    try {
        const result = await axiosInstance.get('/auth/google', {withCredentials: true});
        console.log(result.data)
        return result.data;
    }catch(err){
        console.error(err)
    }
}


// Sign up Request
export async function requestsAddUsers(email: string, password: string) {
    console.log(email, password)
    try {
        const result = await axiosInstance.post('/api/v1/signup', {
            email: email,
            password: password,
        });
        return result.data;
    }catch(err) {
        console.error(err);
    }
}

// Confirm Request
export async function requestsConfirmEmail(id: string) {
    try {
        const result = await axiosInstance.patch(`/api/v1/confirm/${id}`);
        // console.log(result)
        return result.data;
    }catch(err) {
        console.error(err);
    }
}

// Login Request
export async function requestsLogin(email: string, password: string) {
    console.log(email, password)
    try {
        const result = await axiosInstance.post('/api/v1/login', {
            email: email,
            password: password,
        }, {withCredentials: true}
        );
        console.log(result)
        console.log(result.data)
        return result.data;
    }catch(err) {
        console.error(err);
    }
}



// Check autorization user
export async function requestAuthorize() {
    try {
        const result = await axiosInstance.get('/api/v1/secure', {withCredentials: true});
        console.log(result.data)
        return result.data;
    }catch(err){
        console.error(err)
    }
}

// Modify user informations


export async function modifyUser(firstName: string, secondName: string, password: string, id: number) {
    try {
        const result = await axiosInstance.patch(`/api/v1/user/${id}`, {
            firstName: firstName,
            secondName: secondName,
            password: password,
        }, {withCredentials: true}
        );
        console.log(result.data)
        return result.data;
    }catch(err){
        console.error(err)
    }
}




// Logout user


export async function requestLogout() {
    try {
        const result = await axiosInstance.get(`/api/v1/logout`, {withCredentials: true}
        );
        console.log(result.data)
        return result.data;
    }catch(err){
        console.error(err)
    }
}





// TEST 

export async function requestAuthGoogle() {
    try {
        const result = await axiosInstance.get('/google/login', {withCredentials: true});
        console.log(result.data)
        return result.data;
    }catch(err){
        console.error(err)
    }
}