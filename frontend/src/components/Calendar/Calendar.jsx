import { useState, useEffect, useContext } from "react";
import "./Calendar.css";

export function Calendar({ selectedDay, setSelectedDay, appointments }) {
  const daysShort = ["L", "M", "X", "J", "V", "S", "D"];
  const today = new Date();

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


  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goPrevWeek}>◀</button>
        <h3>{title}</h3>
        {/* <button onClick={goToday}>Hoy</button> */}
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
          appointments.length > 0 ? (
            appointments.map((appt) => {
              console.log("APPOINTMENT:", appt);
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