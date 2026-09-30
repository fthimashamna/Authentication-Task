import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Componets/ProtectedRoute";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard/>
                    </ProtectedRoute>
            }/>
        </Routes>
        </BrowserRouter>
    );
}
export default App;