import { useParams } from 'react-router-dom';
import { STATUS } from '../services/status';
import { useEffect, useState } from 'react';
import { fetchMovieRewiews } from 'components/services/fetchMovies';
import Loader from 'components/Loader/Loader';
import css from './Reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [results, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getMovieReviews() {
      try {
        const res = await fetchMovieRewiews(movieId);
        setReviews(res.results);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    }
    getMovieReviews();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  } else if (status === STATUS.RESOLVED) {
    return (
      <div className={css.container}>
        <h2>Rewiews</h2>
        {results.length > 0 ? (
          <ul className={css.list}>
            {results?.map(({ id, author, content }) => (
              <li key={id}>
                {author && <h3>Author: {author}</h3>}
                {content && <p className={css.text}> {content}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p>no rewiews list</p>
        )}
      </div>
    );
  } else if (status === STATUS.REJECTED) {
    return <p>Something went wrong</p>;
  }
};

Reviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;
