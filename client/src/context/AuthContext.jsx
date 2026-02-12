import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/protected", {
                withCredentials: true,
            });
            if (res.data.success) {
                setUser(res.data.user);
                setIsLoggedIn(true);
                return true;
            }
        } catch (error) {
            console.log("Auth check failed:", error.response?.data || error.message);
            setUser(null);
            setIsLoggedIn(false);
        } finally {
            setLoading(false);
        }
        return false;
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = (userData) => {
        setIsLoggedIn(true);
        setUser(userData);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout, checkAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
