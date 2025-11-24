import React from 'react';
import './SearchBar.css';
import { Search } from 'lucide-react'

export default function SearchBar({ onSearch }) {
  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <div className="search">
        <Search/>
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
