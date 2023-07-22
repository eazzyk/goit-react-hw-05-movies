import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b0417ce4f13258c76c4f7fdc636d5dbb';
const TRENDS = '/trending/movie/week';
const SEARCH = '/search/movie';
const MOVIE = '/movie/';
const CAST = '/credits';
const REWIEWS = '/reviews';

// https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=c89dcf9a7de9ef86355d610380679a74
export async function fetchTrendingMovies(page = 1) {
  const params = new URLSearchParams({
    language: 'en-US',
    page: page,
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${BASE_URL}${TRENDS}?${params}`);
  return data;
}

// https://api.themoviedb.org/3/search/movie?query=memo&include_adult=true&language=en-US&page=1&api_key=c89dcf9a7de9ef86355d610380679a74
export async function fetchSearchMovie(searchText, page = 1) {
  const params = new URLSearchParams({
    query: searchText,
    language: 'en-US',
    page: page,
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${BASE_URL}${SEARCH}?${params}`);
  return data;
}

// https://api.themoviedb.org/3/movie/113072?append_to_response=movies&language=en-US&api_key=c89dcf9a7de9ef86355d610380679a74
export async function fetchMovie(id) {
  const params = new URLSearchParams({
    append_to_response: 'movies',
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${BASE_URL}${MOVIE}${id}?${params}`);
  return data;
}

// https://api.themoviedb.org/3/movie/113072/credits?language=en-US&api_key=c89dcf9a7de9ef86355d610380679a74
export async function fetchMovieCast(id) {
  const params = new URLSearchParams({
    language: 'en-US',
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${BASE_URL}${MOVIE}${id}${CAST}?${params}`);
  return data;
}

// https://api.themoviedb.org/3/movie/484089/reviews?language=en-US&page=1&api_key=c89dcf9a7de9ef86355d610380679a74

export async function fetchMovieRewiews(id, page = 1) {
  const params = new URLSearchParams({
    language: 'en-US',
    page: page,
    api_key: API_KEY,
  });
  const { data } = await axios.get(`${BASE_URL}${MOVIE}${id}${REWIEWS}?${params}`);
  return data;
}
