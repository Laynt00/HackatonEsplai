import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

export default function Login() {

  const [formData, setFormData] = useState({
      dni: "",
      password: ""
  })
  const navigate = useNavigate();

  const handleChange =(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit =()=>{
    navigate("/dashboard")
  }

  return (
    <div className="LoginPage">
      <form className="LoginPage__form">
        <div className="LoginPage__form__div">
          <label htmlFor="dni">DNI</label>
          <input type="text" name="dni" id="dni" value={formData.dni} onChange={handleChange} required />
        </div>
        <div className="LoginPage__form__div">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <ButtonComponent onClick={handleSubmit}>
          Login
        </ButtonComponent>
      </form>
    </div>
  )
}
