import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

//get request to retrieve all users
export const getUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};