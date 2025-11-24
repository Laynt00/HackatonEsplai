import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { UserContext } from "../../context/UserProvider";

export default function Login() {

  const { userLogin } = useContext(UserContext);

  const [formData, setFormData] = useState({
    dni: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      userLogin(data);
      navigate("/home");

    } catch (err) {
      console.error("Error en login:", err);
    }
  };

  return (
    <div className="LoginPage">
      <form className="LoginPage__form" onSubmit={handleSubmit}>
        <div className="LoginPage__form__div">
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            name="dni"
            id="dni"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>

        <div className="LoginPage__form__div">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <ButtonComponent type="submit">
          Login
        </ButtonComponent>
      </form>
    </div>
  );
}
