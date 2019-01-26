import fetch from 'isomorphic-unfetch';

import { getApiUrl } from './config';

export const fetchConfig = async () => fetch(getApiUrl('configuration'))
  .then(response => response.json())
  .then(response => response);

export const fetchPerson = async id => fetch(getApiUrl(`person/${id}`))
  .then(response => response.json())
  .then(response => response);

export const fetchMovie = async id => fetch(getApiUrl(`movie/${id}`))
  .then(response => response.json())
  .then(response => response);
