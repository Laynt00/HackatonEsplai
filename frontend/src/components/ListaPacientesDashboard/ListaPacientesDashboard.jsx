import { useState, useEffect, useContext } from "react";
import "./ListaPacientesDashboard.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export const ListaPacientesDashboard = ({ appointments }) => {
  const {token} = useContext(AuthContext)
  const [appointmentsWithPatients, setAppointmentsWithPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const navigate = useNavigate();

  const handlePatientClick = (p) => {
    navigate("/pacientes", { state: { patient: p } });
  };

  useEffect(() => {
    if (!appointments || appointments.length === 0) {
      setAppointmentsWithPatients([]);
      return;
    }

    const fetchPatients = async () => {
      const updated = await Promise.all(
        appointments.map(async (appt) => {
          try {
            const res = await fetch(
              `http://localhost:8080/schedule/session/${appt.idSession}/patients`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            const patients = res.ok ? await res.json() : [];
            return { ...appt, patients };
          } catch (e) {
            console.error("Error cargando pacientes", e);
            return { ...appt, patients: [] };
          }
        })
      );
      setAppointmentsWithPatients(updated);
    };

    fetchPatients();
  }, [appointments, token]);

  // Creamos un array plano de pacientes con info de su sesión
  const patientsFlat = appointmentsWithPatients.flatMap((appt) =>
    appt.patients.map((p) => ({
      ...p,
      session: appt.activity?.name || "Sin actividad",
      datetimeStart: appt.datetimeStart,
      datetimeFinish: appt.datetimeFinish,
    }))
  );

  if (patientsFlat.length === 0) {
    return <div className="dashboard__empty">No hay pacientes para este día</div>;
  }

  const formatHour = (dateString) =>
    new Date(dateString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });


  return (
    <div className="dashboard">
      <ul className="dashboard__patients-list">
        {patientsFlat.map((p) => (
          <li key={p.id_patient} className="dashboard__patient" onClick={() => handlePatientClick(p)}>
            {/* Línea 1: Nombre del paciente */}
            <div className="patient-name">
              {p.name} {p.surname}
            </div>

            {/* Línea 2: Clase — Empleado — Horas */}
            <div className="dashboard__patient-session">
              {p.session}  
              {" — "}
              {formatHour(p.datetimeStart)} - {formatHour(p.datetimeFinish)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};