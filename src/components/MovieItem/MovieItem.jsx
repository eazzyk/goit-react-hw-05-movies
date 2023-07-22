import { Link } from 'react-router-dom';
import defaultPoster from '../images/no_poster.jpg';
import css from './MovieItem.module.css';

const MovieItem = ({ id, title, poster, rate, path }) => {
  return (
    <li className={css.item} id={id}>
      <Link to={`/movies/${id}`} state={path}>
        <img
          className={css.image}
          src={poster ? `https://image.tmdb.org/t/p/w300/${poster}` : defaultPoster}
          alt={title}
          loading="lazy"
        />
      </Link>
      <h2 className={css.title}>{title}</h2>
      <p className={css.rate}>Rating: {rate.toFixed(1)}</p>
    </li>
  );
};

export default MovieItem;
