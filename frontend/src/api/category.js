import axios from 'axios';

export const creatCategory = async(formData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    };
    const response = await axios.post(`http://localhost:5000/api/category`, formData, config);

    return response;
}