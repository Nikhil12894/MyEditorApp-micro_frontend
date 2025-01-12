import React from "react";
import { useAuth } from "./context/AuthContext";

const LoginButton: React.FC = () => {
    const { login } = useAuth();
    const handleLogin = () => {
        const redirectUri = encodeURIComponent(window.location.href);
        login(redirectUri); // Pass the current app's URL as the redirect URI
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default LoginButton;
