import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { createContext, useState } from "react"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: "",
        dni: "",
        name: "",
        surname: "",
        role: "",
    })
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const decoded = jwtDecode(token);
            console.log(decoded)
        }
    })
    const userLogout = () => {
        setUser({
            id: "",
            dni: "",
            name: "",
            surname: "",
            role: "",
        })
    }

    const userLogin = (data) => {
        setUser({
            id: data.id,
            dni: data.dni,
            name: data.name,
            surname: data.surname,
            role: data.role,
        })
    }

    return (
        <UserContext.Provider value={{
            user,
            userLogout,
            userLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}
