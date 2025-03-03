import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const AuthContextProvider = ({children}) => {
    const user = localStorage.getItem('userData')
    const [userData, setUserData] = useState({
        userInfo: null,
        authIsReady: false
    })

    const resetUser = () => {
        setUserData({
            userInfo: null,
            authIsReady: false
        })
    }

    useEffect(() => {
        if(user) {
            setUserData(prevUserData => (
                {...prevUserData, userInfo: JSON.parse(user)}
            ))
        }
    }, [user])

    const value = {
        userData,
        setUserData,
        resetUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider