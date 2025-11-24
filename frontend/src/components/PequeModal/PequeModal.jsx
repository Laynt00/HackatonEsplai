import React, { useEffect } from 'react';
import './PequeModal.css';

export default function PequeModal({ peque, onClose }) {

  // Si no hay peque ⇒ no mostrar modal
  if (!peque) return null;

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // 🔥 Evita el doble clic definitivamente
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>

        <div className="modal-header">
          <img
            src={peque.image}
            alt={`${peque.name} ${peque.surname}`}
            className="modal-image"
          />
          <h2>{peque.name} {peque.surname}</h2>
        </div>

        <div className="modal-body">
          <p><strong>DNI:</strong> {peque.dni}</p>
          <p><strong>Patología:</strong> {peque.pathology}</p>
          <p><strong>Fecha de nacimiento:</strong> {peque.birthdate}</p>
          <p><strong>Edad:</strong> {calcularEdad(peque.birthdate)} años</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary">Ver historial médico</button>
          <button className="btn btn-secondary">Editar información</button>
        </div>
      </div>
    </div>
  );
}

// Función auxiliar
function calcularEdad(fechaNacimiento) {
  const nacimiento = new Date(fechaNacimiento);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}
