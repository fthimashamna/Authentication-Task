import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, message } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const success = await login(email, password);

        if (success) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>

                <h2>Login</h2>

                <p className="message">{message}</p>

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

                <button type="submit">Login</button>

                <p className="account-text">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        className="link-button"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </p>

            </form>
        </div>
    );
}

export default Login;