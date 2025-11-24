import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        id: "",
        dni: "",
        name: "",
        surname: "",
        role: "",
    })

    const userLogout =()=>{
        setUser({
            id: "",
            dni: "",
            name: "",
            surname: "",
            role: "",
        })
    }

    const userLogin =(data)=>{
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
