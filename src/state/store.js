import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {
  movies as moviesReducer,
  moviesInitialState,
} from './movies/reducer';

import {
  persons as personsReducer,
  personsInitialState,
} from './persons/reducer';

import {
  config as configReducer,
  configInitialState,
} from './config/reducer';

const initialState = {
  ...configInitialState,
  ...moviesInitialState,
  ...personsInitialState,
};

const reducer = combineReducers({
  config: configReducer,
  movies: moviesReducer,
  persons: personsReducer,
});

export const initStore = (state = initialState) => createStore(
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export const clientState = state => ({
  config: state.config,
  movies: state.movies,
  persons: state.persons,
});

export default initStore;
