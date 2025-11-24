import "./DashBoard.css";
//import { Header } from "../../components/Header/Header";
import { Calendar } from "../../components/Calendar/Calendar";
import { useState, useEffect, useContext } from "react";
import { ListaPacientesDashboard } from "../../components/ListaPacientesDashboard/ListaPacientesDashboard";
import Navbar from "../../components/Navbar/NavBar";

export default function Dashboard() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  //El token hay que traerselo del contexto
  const [token, setToken] = useState("sdjndfuidf")
  
  const formatDate = (d) => d?.toISOString().split("T")[0] || "";

	useEffect(() => {
	if (!selectedDay) return;
        const fetchAppointments = async () => {
            try {
                const res = await fetch(
                    `http://localhost:8080/schedule/date/${formatDate(selectedDay)}`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                if (!res.ok) throw new Error("Error al cargar citas");
                const data = await res.json();
                setAppointments(data);
            } catch (e) {
                console.error(e);
                setAppointments([]);
            }
        };
	fetchAppointments();
	}, [selectedDay, token]);


  return (
    <div className="DashboardPage">
      <Navbar />
      
      <div className="DashboardPage__content">
        <Calendar
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          appointments={appointments} 
        />
        <ListaPacientesDashboard
          appointments={appointments} 
        />
      </div>
    </div>
  );
};
