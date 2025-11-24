import React, { useState } from "react";
import "./PequeModal.css";

export default function PatientModal({ peque, onClose }) {
  const [medications, setMedications] = useState(peque.medications || []);
  const [medicationData, setMedicationData] = useState({
    idMedication: "",
    dosage: "",
    administrationMethod: "",
    startDate: "",
    finishDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicationData({ ...medicationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      idPatient: peque.id_patient,
      ...medicationData,
    };

    try {
      const response = await fetch("http://localhost:8080/patient-medications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer user_id`
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Error al añadir medicación");

      const newMed = await response.json();

      // Actualizar la lista de medicaciones
      setMedications([...medications, newMed]);

      // Limpiar el formulario
      setMedicationData({
        idMedication: "",
        dosage: "",
        administrationMethod: "",
        startDate: "",
        finishDate: "",
      });

    } catch (error) {
      console.error(error);
      alert("No se pudo añadir la medicación");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{peque.name} {peque.surname}</h2>
        <p>Patologías: {peque.pathology || "N/A"}</p>

        <div className="medications">
          <h3>Medicaciones</h3>
          <p>{peque.medications || "N/A"}</p>
          {medications.length === 0 ? (
            <p>No hay medicaciones</p>
          ) : (
            medications.map((m, i) => (
              <div key={i}>
                {m.name} a las {m.hour || "–"} ✅
              </div>
            ))
          )}
        </div>

        <h3>Añadir Medicación</h3>
        <form onSubmit={handleSubmit} className="medication-form">
          <input
            type="number"
            name="idMedication"
            placeholder="ID Medicación"
            value={medicationData.idMedication}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dosage"
            placeholder="Dosis"
            value={medicationData.dosage}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="administrationMethod"
            placeholder="Método de administración"
            value={medicationData.administrationMethod}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="startDate"
            value={medicationData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="finishDate"
            value={medicationData.finishDate}
            onChange={handleChange}
            required
          />
          <button type="submit">Añadir Medicación</button>
        </form>
      </div>
    </div>
  );
}