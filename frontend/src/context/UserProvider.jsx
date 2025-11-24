import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: "",
        dni: "",
        name: "",
        surname: "",
        role: "",
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

    const userLogin = async (formData) => {
        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) throw new Error("Credenciales incorrectas");
            const data = await res.json();
            return data

        } catch (error) {
            console.log(error);
        }
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
