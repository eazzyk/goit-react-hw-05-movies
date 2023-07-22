import defaultPoster from '../images/no_poster.jpg';
import css from './Movie.module.css';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => {
  const { poster_path, genres, homepage, overview, title, vote_average } = movie;
  return (
    <div className={css.item}>
      <img
        className={css.item_img}
        src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultPoster}
        alt={title}
        loading="lazy"
      />
      <div className={css.item_description}>
        <h2>{title}</h2>
        <h3>Overwiew</h3>
        <p>{overview}</p>
        <p>Rate: {vote_average.toFixed(1)}</p>
        <h3>Genres</h3>
        <ul>
          <li key={'genres'}>{genres?.map(genre => genre.name).join(', ')}</li>
        </ul>
        {homepage && (
          <a href={homepage} target="_blank" rel="noreferrer">
            <p>Official page</p>
          </a>
        )}
      </div>
    </div>
  );
};

Movie.propTypes = {
  genres: PropTypes.array,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  homepage: PropTypes.string,
  overview: PropTypes.string,
};
export default Movie;
