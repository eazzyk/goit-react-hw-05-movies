import SearchBar from 'components/SearchBar/SearchBar';
import { fetchSearchMovie } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { STATUS } from '../../services/status';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMovies() {
      try {
        setStatus(STATUS.PENDING);
        const movies = await fetchSearchMovie(query);

        if (movies.results.length > 0) {
          setStatus(STATUS.RESOLVED);
          setResults(movies.results);
        } else {
          setResults([]);
        }
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    }
    getMovies();
  }, [query]);

  const handleSearch = query => {
    setSearchParams({ query });
  };
  return (
    <div className={css.container}>
      <SearchBar handleSearch={handleSearch} />
      {status === STATUS.PENDING && <Loader />}
      <MoviesList movies={results} />
    </div>
  );
};

export default Movies;
