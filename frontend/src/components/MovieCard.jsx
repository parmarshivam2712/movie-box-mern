import React from 'react';

export default function MovieCard({ movie, onClick }) {
  const rating = movie.userAverageRating || movie.imdb?.rating || 'N/A';

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <div className="poster-container">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={movie.title}
            className="poster-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="poster-fallback"
          style={{ display: movie.poster ? 'none' : 'flex' }}
        >
          🎬 {movie.title}
        </div>

        <div className="badge-rating">⭐ {rating}</div>
      </div>

      <div className="card-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-meta">
          <span>{movie.year}</span>
          <span>{movie.languages?.[0] || 'English'}</span>
        </div>

        {movie.genres && movie.genres.length > 0 ? (
          <div className="genre-tags">
            {movie.genres.slice(0, 3).map((g) => (
              <span key={g} className="genre-pill">
                {g}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
