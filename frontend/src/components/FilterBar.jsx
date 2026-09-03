import React from 'react';

export default function FilterBar({
  genres,
  selectedType,
  setSelectedType,
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
        <label className="filter-label">Category:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Media</option>
          <option value="Movie">🎬 Movies</option>
          <option value="TV Show">📺 TV Shows</option>
          <option value="Anime">⛩️ Anime</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Genre:</label>
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
        <label className="filter-label">Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Years</option>
          <option value="2023">2023</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1994">1994</option>
          <option value="1991">1991</option>
          <option value="1985">1985</option>
          <option value="1979">1979</option>
          <option value="1972">1972</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Min Rating:</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="filter-select"
        >
          <option value="">Any Rating</option>
          <option value="9.0">⭐ 9.0+ Top Hits</option>
          <option value="8.5">⭐ 8.5+</option>
          <option value="8.0">⭐ 8.0+</option>
        </select>
      </div>

      <div>
        <label className="filter-label">Sort By:</label>
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
