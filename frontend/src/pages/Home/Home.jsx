import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <svg className="home-logo" width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="100" height="100" rx="16" fill="#2b6cb0" />
        <text x="50" y="57" fontSize="48" textAnchor="middle" fill="white" fontFamily="Arial, Helvetica, sans-serif">N</text>
      </svg>

      <h2 className="subtitle">FUNDACIÓ</h2>
      <h1 className="title">NEXE</h1>

      <button className="btn" onClick={() => navigate("/login")}>
        Acceder
      </button>

      <p className="recover">Recuperar contraseña</p>
    </div>
  );
}