import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';

const API_URL = import.meta.env.VITE_API_URL || 'https://movie-box-mern.onrender.com/api/movies';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter & Search States
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [minRating, setMinRating] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  // Modal State
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL, {
        params: {
          search,
          type: selectedType,
          genre: selectedGenre,
          year: selectedYear,
          minRating,
          sortBy,
          limit: 30,
        },
      });
      setMovies(res.data.movies || []);
    } catch (err) {
      console.error('Failed to fetch movies', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchGenres = async () => {
    try {
      const res = await axios.get(`${API_URL}/genres`);
      setGenres(res.data || []);
    } catch (err) {
      console.error('Failed to fetch genres', err);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies();
    }, 300);
    return () => clearTimeout(timer);
  }, [search, selectedType, selectedGenre, selectedYear, minRating, sortBy]);

  const handleSuggestMovie = async () => {
    try {
      const res = await axios.get(`${API_URL}/suggest`);
      if (res.data) {
        setSelectedMovie(res.data);
      }
    } catch (err) {
      console.error('Failed to fetch random suggestion', err);
    }
  };

  const handleRateMovie = async (id, score) => {
    try {
      const res = await axios.post(`${API_URL}/${id}/rate`, { score });
      if (res.data && res.data.movie) {
        setSelectedMovie(res.data.movie);
        setMovies(movies.map((m) => (m._id === id ? res.data.movie : m)));
      }
    } catch (err) {
      console.error('Failed to submit rating', err);
    }
  };

  return (
    <div className="movie-app">
      <Header
        search={search}
        setSearch={setSearch}
        onSuggestClick={handleSuggestMovie}
      />

      <FilterBar
        genres={genres}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        minRating={minRating}
        setMinRating={setMinRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <MovieGrid
        movies={movies}
        loading={loading}
        onMovieClick={(movie) => setSelectedMovie(movie)}
      />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onRateMovie={handleRateMovie}
      />
    </div>
  );
}