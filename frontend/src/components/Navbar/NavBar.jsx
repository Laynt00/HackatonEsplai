import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../public/img/nexe_blue.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserProvider";

export default function Navbar() {

	const {user} = useContext(UserContext)
	console.log(user);
	

	return (
		<nav className="navbar">
			<div className="navbar_logo">
				<img src={logo} alt="Logo" className="navbar-logo-img" />
				<p className="navbar-title">Fundació <span>Nexe</span></p>
			</div>
			<div className="navbar-links">
				
					<NavLink to="/dashboard" className={({ isActive }) =>
						isActive ? "navlink active" : "navlink"}
					>
						Dashboard
					</NavLink>
				

				
					<NavLink to="/peques" className={({ isActive }) =>
							isActive ? "navlink active" : "navlink"}
					>
						Peques
					</NavLink>
				
				{user?.role === "family" && 
					<NavLink to="/peques" className={({ isActive }) =>
							isActive ? "navlink active" : "navlink"}
					>
						Mis Peques
					</NavLink>
				}

				
					<NavLink to="/comunication" className={({ isActive }) =>
							isActive ? "navlink active" : "navlink"}
					>
						Comunicación
					</NavLink>
			
			</div>
		</nav>
	);
}