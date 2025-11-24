import React from 'react';
import './PequesCollection.css';
import PequeCard from '../PequeCard/PequeCard.jsx';

export default function PequesCollection({ peques }) {
  return (
    <div className="peques-wrapper">
      <div className="peques-grid">
        {peques.map((p) => (
          <PequeCard key={p.id} peque={p} />
        ))}
      </div>
    </div>
  );
}
