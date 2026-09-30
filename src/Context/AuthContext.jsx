import { useState,createContext,useEffect } from "react";
import { getUserByEmail, getUserById, getUserByName, registerUser } from "../Servises/authApi";

const AuthContext = createContext();
function AuthProvider({children}){
    const [user,setUser]=useState(null);
    const [message,setMessage]=useState("");
    const [isLoading,setIsLoading]=useState(true);

    const login = async (email,password)=>{
    const response = await getUserByEmail(email);
    if(response.data.length===0){
     setMessage("User Not Found");
     return;
    }
    const foundUser=response.data[0];

    if(password!==foundUser.password){
        setMessage("Invalid password");
        return;
    }
    setUser(foundUser);
    localStorage.setItem("userId",foundUser.id);
    setMessage("Login Succesfull");

    return true;
};

const register = async (data)=>{
    const existingUser = await getUserByName(data.username);
    if(existingUser.data.length>0){
        setMessage("username aldready exists");
        return;
    }
    const existingEmail = await getUserByEmail(data.email);
    if(existingEmail.data.length>0){
        setMessage("Email aldready exists");
        return;
    }
    const response = await registerUser(data);
    setMessage("Registration Succesfull");
    return true;
}

const logout= ()=>{
    localStorage.removeItem("userId");
    setUser(null);
};
useEffect(()=>{
    const storedUserid = localStorage.getItem("userId");
    if(storedUserid){
        const fetchUser = async()=>{
            const response = await getUserById(storedUserid);
            setUser(response.data);
            setIsLoading(false);
        };
        fetchUser();
    }
    if(!storedUserid){
        setIsLoading(false);
    }
},[]);
    return(
        <AuthContext.Provider value={{user,login,register,logout,message,isLoading}}>
            {children}
        </AuthContext.Provider>
    );
}
export {AuthContext, AuthProvider};
