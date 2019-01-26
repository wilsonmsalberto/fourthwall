/**
 * Module dependencies.
 */

import * as fromReducer from './reducer';

/**
  * Export `getPersons` selector.
  */

export const getPersons = state => fromReducer.getPersons(state.persons);

/**
 * Export `getPersonById` selector.
 */

export const getPersonById = (state, id) => {
  const persons = getPersons(state);

  return persons[id] || {};
};

/**
 * Export `getPersonName` selector.
 */

export const getPersonName = (state, id) => {
  const person = getPersonById(state, id);

  return person.name;
};

/**
 * Export `getPersonImage` selector.
 */

export const getPersonImageUrl = (state, id) => {
  const person = getPersonById(state, id);

  return person.profile_path;
};
