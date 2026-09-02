import React from 'react';
import MovieCard from './MovieCard';

export default function MovieGrid({ movies, loading, onMovieClick }) {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8', fontSize: '16px' }}>
        🎬 Loading Movie Box catalog...
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8' }}>
        <h3>No movies found matching your filters.</h3>
        <p style={{ marginTop: '8px', fontSize: '14px' }}>
          Try clearing your search term or selecting a different genre.
        </p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
}
