import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('sanctus_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Error parsing stored user:', error);
                localStorage.removeItem('sanctus_user');
            }
        }
        setLoading(false);
    }, []);

    const login = (userData, rememberMe = false) => {
        setUser(userData);
        if (rememberMe) {
            localStorage.setItem('sanctus_user', JSON.stringify(userData));
        } else {
            sessionStorage.setItem('sanctus_user', JSON.stringify(userData));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('sanctus_user');
        sessionStorage.removeItem('sanctus_user');
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
