import Loader from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'components/services/moviesAPI/fetchMovies';
import { useEffect, useState } from 'react';
import { STATUS } from 'components/services/moviesAPI/status';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(prevPage => {
    const getTrendingMovies = async () => {
      try {
        setStatus(STATUS.PENDING);
        const { results } = await fetchTrendingMovies();

        setMovies(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending movies of the week</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {status === STATUS.PENDING && <Loader />}
    </div>
  );
};

export default Home;
