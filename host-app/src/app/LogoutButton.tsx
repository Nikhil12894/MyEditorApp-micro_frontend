import React from 'react';
import { useAuth } from './context/AuthContext';
import { LogOut } from "lucide-react";

const LogoutButton: React.FC = () => {
    const auth = useAuth();

    const handleLogoutClick = async () => {
        await auth.logout('/logout'); // Call the logout function
    };
    return (
        <button onClick={handleLogoutClick} className="flex items-between px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
           Log Out<LogOut className="ml-2 h-4 w-4" />
        </button>
    );
};

export default LogoutButton;
