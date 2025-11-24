import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../public/img/nexe_blue.svg";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar_logo">
				<img src={logo} alt="Logo" className="navbar-logo-img" />
				<span className="navbar-title">Fundació Nexe</span>
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

				<NavLink to="/comunication" className={({ isActive }) =>
						isActive ? "navlink active" : "navlink"}
				>
					Comunicación
				</NavLink>
			</div>
			{/* <div className="language-icon">
				<img src={languageIcon}
					alt="language-icon"
					className="language-icon"
				/>
			</div> */}
		</nav>
	);
}