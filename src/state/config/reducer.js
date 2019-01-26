import * as actionTypes from './actionTypes';

export const configInitialState = {
  config: {},
};

export const config = (state = configInitialState.config, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CONFIG_SUCCESS: {
      return { ...action.payload.result };
    }
    case actionTypes.GET_CONFIG_START:
    case actionTypes.GET_CONFIG_FAIL:
    default:
      return state;
  }
};

export const getConfig = (state = configInitialState.config) => state;

export default config;
