import { useParams } from 'react-router-dom';
import { STATUS } from 'components/services/moviesAPI/status';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'components/services/moviesAPI/fetchMovies';
import Loader from 'components/Loader/Loader';
import defaultPoster from '../images/no_poster.jpg';
import css from './Cast.module.css';
import PropTypes from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getMovieCast() {
      try {
        const res = await fetchMovieCast(movieId);
        setCast(res.cast);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    }
    getMovieCast();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.RESOLVED) {
    return (
      <div className={css.container}>
        <h2>Cast</h2>
        {cast.length > 0 ? (
          <ul className={css.list}>
            {cast?.map(({ id, profile_path, name, character }) => (
              <li className={css.item} key={id}>
                <img
                  className={css.img}
                  src={
                    profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : defaultPoster
                  }
                  alt={name}
                  loading="lazy"
                />
                {name && <p className={css.name}>Name: {name}</p>}
                {character && <p className={css.name}>Character: {character}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p>no cast list</p>
        )}
      </div>
    );
  } else if (status === STATUS.REJECTED) {
    return <p>Something went wrong</p>;
  }
};

Cast.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
};
export default Cast;
