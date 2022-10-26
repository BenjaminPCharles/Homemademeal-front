import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5789',
})

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
        });
        // console.log(result)
        return result.data;
    }catch(err) {
        console.error(err);
    }
}
