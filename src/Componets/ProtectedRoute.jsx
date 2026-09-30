import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
function ProtectedRoute({children}){
    const {user,isLoading} =useContext(AuthContext);
    if (isLoading) {
    return <p>Loading...</p>;
}
    if(!user){
        return <Navigate to="/login"/>;
    }
    return children;
}
export default ProtectedRoute;