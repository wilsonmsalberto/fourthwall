import * as actionTypes from './actionTypes';

export const personsInitialState = {
  persons: {},
};

export const persons = (state = personsInitialState.persons, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_PERSON_SUCCESS: {
      const { result } = action.payload;
      if (!state[result.id]) {
        state[result.id] = { ...result };
      }
      return { ...state };
    }
    case actionTypes.GET_PERSON_START:
    case actionTypes.GET_PERSON_FAIL:
    default:
      return state;
  }
};

export const getPersons = (state = personsInitialState.persons) => state;

export default persons;
