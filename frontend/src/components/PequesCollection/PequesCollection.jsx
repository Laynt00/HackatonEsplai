import React, { useState, useMemo } from "react";
import PequeCard from "../PequeCard/PequeCard";
import "./PequesCollection.css";
import SearchBar from "../SearchBar/SearchBar";

export default function PequesCollection({ peques = [], onSelectPeque }) {
  const [query, setQuery] = useState("");

  const filteredPeques = useMemo(() => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return peques;
    return peques.filter((p) => p.name && p.name.toLowerCase().includes(q));
  }, [peques, query]);

  return (
    <>
      <SearchBar onSearch={setQuery} />
      <div className="peque-grid">
        {filteredPeques.map((p) => (
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
