import { useNavigate } from "react-router-dom";
import "./Home.css";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="HomePage">
      <div className="block">
      <div className="HomePage__FundacioNexe">
        <h2 className="HomePage__subtitle">FUNDACIÓ</h2>
        <h1 className="HomePage__title">NEXE</h1>
      </div>
      <ButtonComponent onClick={()=>navigate("/login")}>
        Acceder
      </ButtonComponent>
    </div>
    </div>
  );
}