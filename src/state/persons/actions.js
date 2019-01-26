import { fetchPerson } from 'sdk';
import { getPersonById } from './selectors';
import * as actionTypes from './actionTypes';

export const getPerson = id => async (dispatch, getState) => {
  dispatch({ type: actionTypes.GET_PERSON_START });
  try {
    let person = getPersonById(getState(), id);

    if (!Object.keys(person).length) {
      person = await fetchPerson(id);
    }

    dispatch({ type: actionTypes.GET_PERSON_SUCCESS, payload: { result: person } });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PERSON_FAIL, payload: { error } });

    throw error;
  }
};

export default getPerson;
