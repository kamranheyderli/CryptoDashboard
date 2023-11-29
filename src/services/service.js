// service.js
import axios from 'axios';

const apiUrl = 'https://api.coincap.io/v2/assets';

export const getData = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data from the API:', error);
        throw error;
    }
};
