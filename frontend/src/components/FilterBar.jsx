import React from 'react';

export default function FilterBar({
  genres,
  selectedGenre,
  setSelectedGenre,
  selectedYear,
  setSelectedYear,
  minRating,
  setMinRating,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filter-toolbar">
      <div>
        <label style={{ fontSize: '12px', color: '#94a3b8', marginRight: '6px' }}>Genre:</label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={{ fontSize: '12px', color: '#94a3b8', marginRight: '6px' }}>Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Years</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2014">2014</option>
          <option value="2010">2010</option>
          <option value="2008">2008</option>
          <option value="2001">2001</option>
          <option value="1994">1994</option>
        </select>
      </div>

      <div>
        <label style={{ fontSize: '12px', color: '#94a3b8', marginRight: '6px' }}>Min Rating:</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="filter-select"
        >
          <option value="">Any Rating</option>
          <option value="8.5">⭐ 8.5+</option>
          <option value="8.0">⭐ 8.0+</option>
          <option value="7.0">⭐ 7.0+</option>
        </select>
      </div>

      <div>
        <label style={{ fontSize: '12px', color: '#94a3b8', marginRight: '6px' }}>Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="rating">Top Rated</option>
          <option value="year-desc">Newest First</option>
          <option value="year-asc">Oldest First</option>
          <option value="title">Title (A-Z)</option>
        </select>
      </div>
    </div>
  );
}
