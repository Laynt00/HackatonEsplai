import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState("sdfdghjlkhgfdsafj")

	useEffect(() => {
		const storedToken = localStorage.getItem("token");
		if (storedToken) setToken(storedToken);
	}, []);

	const saveToken = (newToken) => {
		setToken(newToken);
		if (newToken) localStorage.setItem("token", newToken);
		else localStorage.removeItem("token");
	};

	const logout = () => {
		saveToken(null);
	};

    return (
		<AuthContext.Provider value={{ token, saveToken, logout }}>
			{children}
		</AuthContext.Provider>
    )
}
