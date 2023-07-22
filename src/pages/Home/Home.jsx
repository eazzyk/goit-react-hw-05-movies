// import LoadMore from "components/Button/Button";
import Loader from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'components/services/moviesAPI/fetchMovies';
import { useEffect, useState } from 'react';
import { STATUS } from 'components/services/moviesAPI/status';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  // const [page, setPage] = useState(1);

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

  // const onNextPage = () => {
  // setPage(prevPage => (prevPage + 1));
  // };

  // const showButton = status === STATUS.RESOLVED;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending movies of the week</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {status === STATUS.PENDING && <Loader />}
      {/* {showButton && <LoadMore onClick={onNextPage} />} */}
    </div>
  );
};

export default Home;
