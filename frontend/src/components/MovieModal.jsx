import React, { useState } from 'react';

export default function MovieModal({ movie, onClose, onRateMovie }) {
  const [userRating, setUserRating] = useState(8);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateSuccess, setRateSuccess] = useState(false);

  if (!movie) return null;

  const handleRate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onRateMovie(movie._id, userRating);
    setIsSubmitting(false);
    setRateSuccess(true);
    setTimeout(() => setRateSuccess(false), 3000);
  };

  const rating = movie.userAverageRating || movie.imdb?.rating || 'N/A';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose}>
          ✕
        </button>

        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} className="modal-poster" />
        ) : (
          <div
            className="poster-fallback"
            style={{ width: '220px', height: '330px', borderRadius: '10px' }}
          >
            🎬 {movie.title}
          </div>
        )}

        <div className="modal-details">
          <h2>
            {movie.title} <span style={{ fontSize: '18px', color: '#94a3b8' }}>({movie.year})</span>
          </h2>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '14px' }}>
            <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>⭐ {rating} / 10</span>
            <span style={{ color: '#94a3b8' }}>|</span>
            <span style={{ color: '#94a3b8' }}>{movie.genres?.join(', ')}</span>
          </div>

          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#cbd5e1', marginTop: '6px' }}>
            {movie.fullplot || movie.plot || 'No description available for this title.'}
          </p>

          {movie.cast && movie.cast.length > 0 ? (
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              <strong>Cast:</strong> {movie.cast.join(', ')}
            </div>
          ) : null}

          {movie.directors && movie.directors.length > 0 ? (
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>
              <strong>Director(s):</strong> {movie.directors.join(', ')}
            </div>
          ) : null}

          {/* User Rating Widget */}
          <div className="rating-widget">
            <div style={{ fontWeight: '600', fontSize: '14px' }}>Rate this movie:</div>
            <form onSubmit={handleRate} className="rating-form">
              <select
                value={userRating}
                onChange={(e) => setUserRating(Number(e.target.value))}
                className="rating-select"
              >
                {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    ⭐ {num} / 10
                  </option>
                ))}
              </select>

              <button type="submit" className="btn-rate" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Submit Rating'}
              </button>
            </form>
            {rateSuccess ? (
              <div style={{ fontSize: '12px', color: '#10b981', marginTop: '6px' }}>
                ✓ Thank you! Your rating has been submitted.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
