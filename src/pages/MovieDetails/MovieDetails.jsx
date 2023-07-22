import Movie from 'components/Movie/Movie';
import { fetchMovie } from 'components/services/moviesAPI/fetchMovies';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { STATUS } from 'components/services/moviesAPI/status';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();
  // console.log('movieId :>> ', movieId);
  const location = useLocation();
  const backLink = useRef([location.state?.from || '/']);

  useEffect(() => {
    if (!location.state) {
      return;
    }
    if (backLink.current[backLink.current.length - 1] !== location.state.from) {
      backLink.current.push(location.state.from);
    }
  }, [location]);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getMovie() {
      try {
        const movie = await fetchMovie(movieId);
        setMovie(movie);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    }
    getMovie();
  }, [movieId]);

  const reduceLocation = () => {
    backLink.current.pop();
  };

  if (status === STATUS.RESOLVED) {
    return (
      <div className={css.container}>
        <Link to={backLink.current[backLink.current.length - 1]} onClick={reduceLocation}>
          <button className={css.back}>back</button>
        </Link>
        <Movie movie={movie} />
        <div className={css.links}>
          <Link className={css.link_item} to="cast">
            <h2>Cast</h2>
          </Link>
          <Link className={css.link_item} to="rewiews">
            <h2>Rewiews</h2>
          </Link>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    );
  } else if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.REJECTED) {
    return <p>Something went wrong</p>;
  }
};

export default MovieDetails;
