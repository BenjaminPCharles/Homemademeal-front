import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5789'
})


// Add receipt
export async function requestAddReceipt(title: string, password: string) {
    console.log(title, password)
    try {
        const result = await axiosInstance.post('/api/v1/addReceipt', {
            name: title,
            // step: step,
        });
        return result.data;
    }catch(err) {
        console.error(err);
    }
}

// Get receipt
export async function requestGetReceipt(id: number) {
    try {
        const result = await axiosInstance.get(`/api/v1/getAllReceiptsByUser/${id}`);
        return result.data;
    }catch(err) {
        console.error(err);
    }
}