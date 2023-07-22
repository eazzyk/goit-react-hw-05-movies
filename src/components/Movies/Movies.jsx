import SearchBar from 'components/SearchBar/SearchBar';
import { fetchSearchMovie } from 'components/services/fetchMovies';
import { useEffect, useState } from 'react';
import { STATUS } from '../../services/status';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';
// import LoadMore from "components/Button/Button";

const Movies = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  // const [page, setPage] = useState(1);
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

  // const onNextPage = () => {
  // setPage(prevPage => (prevPage + 1));
  // };

  // const showButton = status === STATUS.RESOLVED;

  return (
    <div className={css.container}>
      <SearchBar handleSearch={handleSearch} />
      {status === STATUS.PENDING && <Loader />}
      <MoviesList movies={results} />

      {/* {showButton && <LoadMore onClick={onNextPage} />} */}
    </div>
  );
};

export default Movies;

// const Movies = () => {

//     const [searchParams, setSearchParams] = useSearchParams();
//     const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));
//     const [movies, setMovies] = useState([]);
//     const [status, setStatus] = useState(STATUS.IDLE);
//     const [page, setPage] = useState(1);
//     // const prevSearchQuery = usePrevious(searchQuery);

//     // const query = searchParams.get("query");
//     // const currentPage = Number(searchParams.get("page"));

//     // const queryRef = useRef(searchQuery);

//     useEffect((prevPage) => {
//         if (!searchQuery) {
//             return;
//         };

//         // if (searchQuery !== queryRef.current) {
//         //     queryRef.current = searchQuery;
//         // };

//         const getMovies = async () => {
//             try {
//                 setStatus(STATUS.PENDING);
//                 const  movies  = await fetchSearchMovie(searchQuery);

//         if (movies.results.length > 0) {
//                     setStatus(STATUS.RESOLVED);
//                     setMovies(movies.results);
//                     // setTotalPages(movies.total_pages);
//                 } else {
//                     // setStatus('nothing');
//                     setMovies([]);
//                     // setTotalPages(0);
//                 }
//             } catch (err) {
//                 setStatus(STATUS.REJECTED)
//             }
//         };
//         if (prevPage !== page) {
//             getMovies();
//         };

//     }, [searchQuery, movies, page])

//       const handleSearch = (movies) => {
//           if (!movies) {
//         <p>Field is empty</p>
//     //   Notify.failure('Field is empty');
//     //   return;
//     }
//     setSearchParams({ query: searchQuery });
//     setSearchQuery(searchQuery);
//     setMovies([]);
//     // setTotalPages(0);
//     };

//     const onNextPage = () => {
//     setPage(prevPage => (prevPage + 1));
//     };

//     const showButton = status === STATUS.RESOLVED;

//     return (<div>
//         <SearchBar handleSearch={handleSearch} />
//         {status === STATUS.PENDING && <Loader />}
//         {movies.length > 0 && <MoviesList movies={movies} />}
//         {showButton && <LoadMore onClick={onNextPage} />}
//     </div> );
// }

// export default Movies;
