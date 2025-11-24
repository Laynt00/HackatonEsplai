import React from "react";
import PequeCard from "../PequeCard/PequeCard";
import "./PequesCollection.css";
import SearchBar from "../SearchBar/SearchBar";

export default function PequesCollection({ peques = [], onSelectPeque }) {
  return (
    <>
      <SearchBar />
      <div className="peque-grid">
        {peques.map((p) => (
          <PequeCard
            key={p.id}
            peque={p}
            onClick={() => onSelectPeque && onSelectPeque(p)}
          />
        ))}
      </div>
    </>
  );
}
