import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchUserInfo, login, logout } from "../services/authService";

interface User {
    name: string;
    email: string;
    picture: string;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: (redirectUri: string) => void;
    logout: (redirectUri: string) => void;
    fetchUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = async () => {
        try {
            const userInfo = await fetchUserInfo();
            setUser(userInfo);
        } catch (error) {
            console.error("Error fetching user info:", error);
            setUser(null);
        }
    };

    const handleLogout = async (redirectUri: string) => {
        try {
            await logout(redirectUri); // Call your logout API
            setUser(null); // Crucial: Update user state to null
        } catch (error) {
            console.error("Logout failed:", error);
            // Optionally, handle logout errors (e.g., display a message)
        }
    };


    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                logout: handleLogout,
                fetchUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
