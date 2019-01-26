/**
 * Module dependencies.
 */

import * as fromReducer from './reducer';

/**
  * Export `getMovies` selector.
  */

export const getMovies = state => fromReducer.getMovies(state.movies);

/**
 * Export `getMovieById` selector.
 */

export const getMovieById = (state, id) => {
  const movies = getMovies(state);

  return movies[id] || {};
};

/**
 * Export `getMovieTitle` selector.
 */

export const getMovieTitle = (state, id) => {
  const movie = getMovieById(state, id);

  return movie.title;
};

/**
 * Export `getMovieImage` selector.
 */

export const getMovieImageUrl = (state, id) => {
  const movie = getMovieById(state, id);

  return movie.poster_path;
};
