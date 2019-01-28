/**
 * Module dependencies.
 */

import * as fromReducer from './reducer';

/**
  * Export `getConfig` selector.
  */

export const getConfig = state => fromReducer.getConfig(state.config);

/**
 * Export `getImageProperties` selector.
 */

export const getImageProperties = (state) => {
  const config = getConfig(state);

  return config.images;
};

/**
 * Export `getImageBaseUrl` selector.
 */

export const getImageBaseUrl = (state) => {
  const imageProperties = getImageProperties(state);

  return imageProperties ? imageProperties.secure_base_url : 'https://image.tmdb.org/t/p/';
};

/**
 * Export `getImageBackdropSizes` selector.
 */

export const getImageBackdropSizes = (state) => {
  const imageProperties = getImageProperties(state);

  return imageProperties.backdrop_sizes;
};

/**
 * Export `getImageLogoSizes` selector.
 */

export const getImageLogoSizes = (state) => {
  const imageProperties = getImageProperties(state);

  return imageProperties.logo_sizes;
};

/**
 * Export `getImagePosterSizes` selector.
 */

export const getImagePosterSizes = (state) => {
  const imageProperties = getImageProperties(state);

  return imageProperties.poster_sizes;
};

/**
 * Export `getImageProfileSizes` selector.
 */

export const getImageProfileSizes = (state) => {
  const imageProperties = getImageProperties(state);

  return imageProperties.profile_sizes;
};
