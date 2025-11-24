import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { UserContext } from "../../context/UserProvider";
import { jwtDecode } from "jwt-decode";

export default function Login() {

  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    dni: "",
    password: ""
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (formData) => {
    const tokenProvisional = await userLogin(formData)
    console.log(tokenProvisional);
    const decoded = jwtDecode(tokenProvisional.token);
    console.log("decoded", decoded);

    navigate("/dashboard")

    if (tokenProvisional.role === 1) {
      navigate("/dashboard")
    }
    else if (tokenProvisional.role === 2) {
      navigate("/peques")
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

        <ButtonComponent onClick={() => handleSubmit(formData)}>
          Login
        </ButtonComponent>
      </form>
    </div>
  );
}
