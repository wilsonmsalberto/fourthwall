import { fetchConfig } from 'sdk';
import * as actionTypes from './actionTypes';

export const getConfig = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_CONFIG_START });

  try {
    const config = await fetchConfig();

    dispatch({ type: actionTypes.GET_CONFIG_SUCCESS, payload: { result: config } });
  } catch (error) {
    dispatch({ type: actionTypes.GET_CONFIG_FAIL, payload: { error } });

    throw error;
  }
};

export default getConfig;
