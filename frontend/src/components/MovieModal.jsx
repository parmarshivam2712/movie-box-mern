import React, { useState, useEffect } from 'react';

const FALLBACK_POSTER = '/placeholder-poster.svg';

export default function MovieModal({ movie, onClose, onRateMovie }) {
  const [selectedStars, setSelectedStars] = useState(8);
  const [hoverStars, setHoverStars] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateSuccess, setRateSuccess] = useState(false);
  const [imgSrc, setImgSrc] = useState(movie?.poster || FALLBACK_POSTER);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (movie) {
      setImgSrc(movie.poster || FALLBACK_POSTER);
      setHasError(false);
    }
  }, [movie?._id, movie?.poster]);

  if (!movie) return null;

  const activeRating = hoverStars || selectedStars;
  const ratingDisplay = movie.userAverageRating || movie.imdb?.rating || 'N/A';
  const mediaType = movie.type || 'Movie';

  const handleRateSubmit = async (score) => {
    setSelectedStars(score);
    setIsSubmitting(true);
    await onRateMovie(movie._id, score);
    setIsSubmitting(false);
    setRateSuccess(true);
    setTimeout(() => setRateSuccess(false), 3500);
  };

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(FALLBACK_POSTER);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose} title="Close Modal">
          ✕
        </button>

        <div className="modal-poster-wrap">
          <img
            src={imgSrc}
            alt={movie.title}
            className="modal-poster"
            onError={handleImageError}
          />
        </div>

        <div className="modal-details">
          <div className="modal-header-info">
            <h2>
              {movie.title} <span className="modal-year">({movie.year})</span>
            </h2>
            <div className="modal-meta-row">
              <span className="type-badge-inline">{mediaType}</span>
              <span className="rating-badge-large">⭐ {ratingDisplay} / 10</span>
              <span className="meta-divider">•</span>
              <span className="genres-list">{movie.genres?.join(', ')}</span>
            </div>
            {movie.seasons ? (
              <div className="series-episodes-info">
                📺 {movie.seasons} Season{movie.seasons > 1 ? 's' : ''} • {movie.episodes} Episodes
              </div>
            ) : null}
          </div>

          <p className="modal-plot">
            {movie.fullplot || movie.plot || 'No detailed synopsis available for this title.'}
          </p>

          <div className="modal-cast-info">
            {movie.cast && movie.cast.length > 0 && (
              <div>
                <strong>Cast:</strong> {movie.cast.join(', ')}
              </div>
            )}
            {movie.directors && movie.directors.length > 0 && (
              <div>
                <strong>Director/Creator:</strong> {movie.directors.join(', ')}
              </div>
            )}
          </div>

          {/* Interactive IMDb-style Star Rating Widget */}
          <div className="star-rating-box">
            <div className="star-rating-title">
              <span>YOUR RATING</span>
              <span className="current-star-score">{activeRating} / 10 ⭐</span>
            </div>

            <div className="stars-row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-btn ${star <= activeRating ? 'filled' : ''}`}
                  onMouseEnter={() => setHoverStars(star)}
                  onMouseLeave={() => setHoverStars(0)}
                  onClick={() => handleRateSubmit(star)}
                  disabled={isSubmitting}
                  title={`Rate ${star} / 10`}
                >
                  ★
                </button>
              ))}
            </div>

            {rateSuccess ? (
              <div className="rating-toast">
                ✓ Rating of {selectedStars}/10 submitted successfully!
              </div>
            ) : (
              <div className="rating-hint">Click a star to rate from 1 to 10</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
