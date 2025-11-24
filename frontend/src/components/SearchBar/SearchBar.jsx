import React from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  return (
    <form className="search-bar">
      <div className="search">
        <span className="material-symbols-outlined">search</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </form>
  );
}
