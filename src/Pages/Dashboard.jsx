import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">

                <h2>Welcome, {user.username}</h2>

                <p>Email: {user.email}</p>

                <button
                    className="logout-button"
                    onClick={() => {
                        logout();
                        navigate("/login");
                    }}
                >
                    Logout
                </button>

            </div>
        </div>
    );
}

export default Dashboard;