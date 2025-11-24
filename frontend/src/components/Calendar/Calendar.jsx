import { useState } from "react";
import { ListaPacientesDashboard } from "../ListaPacientesDashboard/ListaPacientesDashboard"; 
import "./Calendar.css";

export function Calendar({ selectedDay, setSelectedDay }) {
  const daysShort = ["L", "M", "X", "J", "V", "S", "D"];
  const today = new Date();

  // --- OBTENER LUNES DE ESTA SEMANA ---
  const getMonday = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = (day === 0 ? -6 : 1) - day;
    d.setDate(d.getDate() + diff);
    return d;
  };

  const monday = getMonday(today);
  const dayOfThisWeek = (n) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + n);
    return d.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  // --- NIÑOS DUMMY ---
  const children = [
    { id_patient: 1, name: "Mario", surname: "López" },
    { id_patient: 2, name: "Lucía", surname: "Serrano" },
    { id_patient: 3, name: "Daniel", surname: "Torres" },
    { id_patient: 4, name: "Carla", surname: "Muñoz" },
    { id_patient: 5, name: "Adrián", surname: "Peña" },
    { id_patient: 6, name: "Nora", surname: "García" },
    { id_patient: 7, name: "Álex", surname: "Ramos" },
    { id_patient: 8, name: "Sofía", surname: "Martínez" },
  ];

  const pickRandomChildren = () => {
    const shuffled = [...children].sort(() => Math.random() - 0.5);
    const count = Math.floor(Math.random() * 4) + 2; // 2–5 niños
    return shuffled.slice(0, count);
  };

  // --- DUMMY DATA PARA ACTIVIDADES ---
  const dummyAppointments = [
    // LUNES
    {
      id_session: 1,
      datetimeStart: `${dayOfThisWeek(0)}T09:00:00`,
      datetimeFinish: `${dayOfThisWeek(0)}T09:45:00`,
      activity: { name: "Rutina de bienvenida" },
      employee: { user: { name: "María", surname: "Santos" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 2,
      datetimeStart: `${dayOfThisWeek(0)}T10:00:00`,
      datetimeFinish: `${dayOfThisWeek(0)}T11:00:00`,
      activity: { name: "Taller de habilidades sociales" },
      employee: { user: { name: "Javier", surname: "García" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 3,
      datetimeStart: `${dayOfThisWeek(0)}T11:30:00`,
      datetimeFinish: `${dayOfThisWeek(0)}T12:15:00`,
      activity: { name: "Logopedia" },
      employee: { user: { name: "Lucía", surname: "Martín" } },
      patients: pickRandomChildren(),
    },
    // MARTES
    {
      id_session: 4,
      datetimeStart: `${dayOfThisWeek(1)}T09:00:00`,
      datetimeFinish: `${dayOfThisWeek(1)}T10:00:00`,
      activity: { name: "Psicomotricidad" },
      employee: { user: { name: "Sara", surname: "López" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 5,
      datetimeStart: `${dayOfThisWeek(1)}T10:15:00`,
      datetimeFinish: `${dayOfThisWeek(1)}T11:00:00`,
      activity: { name: "Autonomía personal" },
      employee: { user: { name: "Ana", surname: "Peña" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 6,
      datetimeStart: `${dayOfThisWeek(1)}T11:30:00`,
      datetimeFinish: `${dayOfThisWeek(1)}T12:30:00`,
      activity: { name: "Aula sensorial" },
      employee: { user: { name: "Rosa", surname: "Díaz" } },
      patients: pickRandomChildren(),
    },
    // MIÉRCOLES
    {
      id_session: 7,
      datetimeStart: `${dayOfThisWeek(2)}T09:00:00`,
      datetimeFinish: `${dayOfThisWeek(2)}T09:45:00`,
      activity: { name: "Comunicación alternativa" },
      employee: { user: { name: "Carlos", surname: "Pérez" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 8,
      datetimeStart: `${dayOfThisWeek(2)}T10:00:00`,
      datetimeFinish: `${dayOfThisWeek(2)}T11:00:00`,
      activity: { name: "Logopedia" },
      employee: { user: { name: "Lucía", surname: "Martín" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 9,
      datetimeStart: `${dayOfThisWeek(2)}T11:30:00`,
      datetimeFinish: `${dayOfThisWeek(2)}T12:30:00`,
      activity: { name: "Taller de música" },
      employee: { user: { name: "Miguel", surname: "Soto" } },
      patients: pickRandomChildren(),
    },
    // JUEVES
    {
      id_session: 10,
      datetimeStart: `${dayOfThisWeek(3)}T09:00:00`,
      datetimeFinish: `${dayOfThisWeek(3)}T10:00:00`,
      activity: { name: "Psicomotricidad" },
      employee: { user: { name: "Sara", surname: "López" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 11,
      datetimeStart: `${dayOfThisWeek(3)}T10:15:00`,
      datetimeFinish: `${dayOfThisWeek(3)}T11:15:00`,
      activity: { name: "Educación emocional" },
      employee: { user: { name: "Ana", surname: "Peña" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 12,
      datetimeStart: `${dayOfThisWeek(3)}T11:30:00`,
      datetimeFinish: `${dayOfThisWeek(3)}T12:30:00`,
      activity: { name: "Aula sensorial" },
      employee: { user: { name: "Rosa", surname: "Díaz" } },
      patients: pickRandomChildren(),
    },
    // VIERNES
    {
      id_session: 13,
      datetimeStart: `${dayOfThisWeek(4)}T09:00:00`,
      datetimeFinish: `${dayOfThisWeek(4)}T10:00:00`,
      activity: { name: "Taller de cocina" },
      employee: { user: { name: "Javier", surname: "García" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 14,
      datetimeStart: `${dayOfThisWeek(4)}T10:15:00`,
      datetimeFinish: `${dayOfThisWeek(4)}T11:00:00`,
      activity: { name: "Logopedia" },
      employee: { user: { name: "Lucía", surname: "Martín" } },
      patients: pickRandomChildren(),
    },
    {
      id_session: 15,
      datetimeStart: `${dayOfThisWeek(4)}T11:30:00`,
      datetimeFinish: `${dayOfThisWeek(4)}T12:30:00`,
      activity: { name: "Asamblea semanal" },
      employee: { user: { name: "María", surname: "Santos" } },
      patients: pickRandomChildren(),
    },
  ];

  // --- CALENDARIO ---
  const generateWeek = (offset = 0) => {
    const base = new Date(today);
    const currentDay = today.getDay();
    base.setDate(today.getDate() - ((currentDay + 6) % 7) + offset * 7);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      return d;
    });
  };

  const weeks = Array.from({ length: 31 }, (_, i) => generateWeek(i - 10));
  const [currentWeekIndex, setCurrentWeekIndex] = useState(10);

  const formatDate = (d) => d?.toISOString().split("T")[0] || "";
  const goPrevWeek = () => setCurrentWeekIndex((i) => Math.max(0, i - 1));
  const goNextWeek = () => setCurrentWeekIndex((i) => Math.min(weeks.length - 1, i + 1));
  const goToday = () => {
    setCurrentWeekIndex(10);
    setSelectedDay(today);
  };

  const currentWeek = weeks[currentWeekIndex];
  if (!currentWeek) return null;
  const title = currentWeek[0].toLocaleDateString("es-ES", { month: "long", year: "numeric" });

  const appointments =
    selectedDay &&
    dummyAppointments.filter(
      (a) => a.datetimeStart.split("T")[0] === selectedDay.toISOString().split("T")[0]
    );

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goPrevWeek}>◀</button>
        <h3>{title}</h3>
        <button onClick={goNextWeek}>▶</button>
      </div>

      <div className="calendar-week">
        {currentWeek.map((day, i) => {
          const isSelected = selectedDay && formatDate(day) === formatDate(selectedDay);
          return (
            <div
              key={i}
              onClick={() => setSelectedDay(day)}
              className={`calendar-day ${isSelected ? "selected" : ""}`}
            >
              <div>{daysShort[i]}</div>
              <div>{day.getDate()}</div>
            </div>
          );
        })}
      </div>

      <div className="calendar-appointments">
        {selectedDay ? (
          appointments && appointments.length > 0 ? (
            appointments.map((appt) => {
              const start = new Date(appt.datetimeStart);
              const end = new Date(appt.datetimeFinish);
              return (
                <div key={appt.id_session} className="appointment-item">
                  <span>
                    {start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} -{" "}
                    {end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  {" - "}
                  <span>{appt.activity?.name ?? "Sin actividad"}</span>
                  {" - "}
                  <span>
                    {appt.employee?.user
                      ? `${appt.employee.user.name} ${appt.employee.user.surname}`
                      : "Sin empleado"}
                  </span>
                </div>
              );
            })
          ) : (
            <div>No hay citas para este día</div>
          )
        ) : (
          <div>Selecciona un día para ver sus citas</div>
        )}
      </div>

    </div>
  );
}
