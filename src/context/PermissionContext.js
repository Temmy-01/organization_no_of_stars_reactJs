import React, { useState, useEffect } from 'react';

const PermissionsContext = React.createContext();

export const PermissionsProvider = ({ children }) => {
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPermissions = () => {
            const storedPermissions = localStorage.getItem('permissions');
            if (storedPermissions) {
                try {
                    const parsedPermissions = JSON.parse(storedPermissions);
                    setPermissions(parsedPermissions);
                } catch (error) {
                    console.error('Error parsing permissions from localStorage:', error);
                }
            } else {
                // Handle the case where permissions are not found in localStorage
                console.warn('No permissions found in localStorage.');
            }
            setLoading(false);
        };

        fetchPermissions();
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <PermissionsContext.Provider value={{ permissions, loading }}>
            {children}
        </PermissionsContext.Provider>
    );
};

export const usePermissions = () => React.useContext(PermissionsContext);



