import axios from "axios";
const URL ="http://localhost:3001/users";

//Create new user
export const registerUser = (data)=>{
    return axios.post(URL,data);
};

//Find user for login
export const getUserByEmail =(email)=>{
    return axios.get(`${URL}?email=${email}`);
};

//Get logged-in user's profile
export const getUserById =(id)=>{
    return axios.get(`${URL}/${id}`);
};

//Check username already exists or not
export const getUserByName =(name)=>{
    return axios.get(`${URL}?username=${name}`);
};

