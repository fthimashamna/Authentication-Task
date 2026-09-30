import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { register, message } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username,
            email,
            password
        };

        const success = await register(data);

        if (success) {
            navigate("/login");
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>

                <h2>Register</h2>

                <p className="message">{message}</p>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Register</button>

                <p className="account-text">
                    Already have an account?{" "}
                    <button
                        type="button"
                        className="link-button"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </p>

            </form>
        </div>
    );
}

export default Register;