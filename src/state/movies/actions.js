import { fetchMovie } from 'sdk';
import { getMovieById } from './selectors';
import * as actionTypes from './actionTypes';

export const getMovie = id => async (dispatch, getState) => {
  dispatch({ type: actionTypes.GET_MOVIE_START });

  try {
    let movie = getMovieById(getState(), id);

    if (!Object.keys(movie).length) {
      movie = await fetchMovie(id);
    }

    dispatch({ type: actionTypes.GET_MOVIE_SUCCESS, payload: { result: movie } });
  } catch (error) {
    dispatch({ type: actionTypes.GET_MOVIE_FAIL, payload: { error } });

    throw error;
  }
};

export default getMovie;
