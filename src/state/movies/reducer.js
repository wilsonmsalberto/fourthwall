import * as actionTypes from './actionTypes';

export const moviesInitialState = {
  movies: {},
};

export const movies = (state = moviesInitialState.movies, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_SUCCESS: {
      const { result } = action.payload;
      if (!state[result.id]) {
        state[result.id] = { ...result };
      }
      return { ...state };
    }
    case actionTypes.GET_MOVIE_START:
    case actionTypes.GET_MOVIE_FAIL:
    default:
      return state;
  }
};

export const getMovies = (state = moviesInitialState.movies) => state;

export default movies;
