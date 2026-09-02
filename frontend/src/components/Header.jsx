import React from 'react';

export default function Header({ search, setSearch, onSuggestClick }) {
  return (
    <header className="app-navbar">
      <a href="/" className="brand-logo">
        🎬 Movie <span>Box</span>
      </a>

      <div className="nav-actions">
        <input
          type="text"
          placeholder="Search movies by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <button onClick={onSuggestClick} className="btn-suggest">
          <span>🎲</span> Suggest Movie
        </button>
      </div>
    </header>
  );
}
