import { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
import Spinner from './components/Spinner';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const API_BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query
        ? `${API_BASE_URL}search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}discover/movie?sort_by=popularity.desc`;

      const res = await fetch(endpoint, API_OPTIONS);
      if (!res.ok) throw new Error('Something went wrong');
      const data = await res.json();

      if (data.results === 'False') {
        setErrorMessage(data.status_message || 'Something went wrong');
        setMoviesList([]);
        return;
      }

      setMoviesList(data.results || []);
    } catch (error) {
      setErrorMessage(`Error fetching movies: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="hero.png" alt="hero banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you enjoy without
            the hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-10 text-center">All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {moviesList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};
export default App;
