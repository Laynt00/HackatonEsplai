import React from 'react';
import './PequeCard.css';

export default function PequeCard({ peque }) {
  return (
    <div className="PequeCard">
      <h3>{peque.name} {peque.surname}</h3>

      <img
        src={peque.image}
        alt={`${peque.name} ${peque.surname}`}
        className="PequeCard__image"
      />

      <p><strong>DNI:</strong> {peque.dni}</p>
      <p><strong>Patología:</strong> {peque.pathology}</p>
      <p><strong>Fecha de nacimiento:</strong> {peque.birthdate}</p>
    </div>
  );
}
