import React, { useState } from 'react';

const FALLBACK_POSTER = '/placeholder-poster.svg';

export default function MovieCard({ movie, onClick }) {
  const [imgSrc, setImgSrc] = useState(movie.poster || FALLBACK_POSTER);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const rating = movie.userAverageRating || movie.imdb?.rating || 'N/A';

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(FALLBACK_POSTER);
    }
  };

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <div className="poster-container">
        <img
          src={imgSrc}
          alt={movie.title}
          className={`poster-img ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          loading="lazy"
        />

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
