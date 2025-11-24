import { useNavigate } from "react-router-dom";
import "./ListaPacientesDashboard.css";

export const ListaPacientesDashboard = ({ appointments }) => {
  const navigate = useNavigate();

  const handlePatientClick = (p) => {
    navigate("/pacientes", { state: { patient: p } });
  };

  const patientsFlat = appointments.flatMap((appt) =>
    appt.patients.map((p) => ({
      ...p,
      session: appt.activity?.name || "Sin actividad",
      datetimeStart: appt.datetimeStart,
      datetimeFinish: appt.datetimeFinish,
      employee: appt.employee?.user
        ? `${appt.employee.user.name} ${appt.employee.user.surname}`
        : "Sin empleado",
    }))
  );

  if (patientsFlat.length === 0) {
    return <div className="dashboard__empty">No hay pacientes para este día</div>;
  }

  const formatHour = (dateString) =>
    new Date(dateString).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="dashboard">
      <ul className="dashboard__patients-list">
        {patientsFlat.map((p) => (
          <li
            key={p.id_patient}
            className="dashboard__patient"
            onClick={() => handlePatientClick(p)}
          >
            <div className="patient-name">
              {p.name} {p.surname}
            </div>
            <div className="dashboard__patient-session">
              {p.session} — {p.employee} — {formatHour(p.datetimeStart)} -{" "}
              {formatHour(p.datetimeFinish)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
