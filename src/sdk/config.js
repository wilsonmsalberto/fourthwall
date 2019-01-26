import urlJoin from 'url-join';

const apiKey = `?api_key=${process.env.API_KEY}&language=en-US`;
const apiUrl = 'https://api.themoviedb.org/3/';

export const getApiUrl = endpoint => urlJoin(apiUrl, endpoint, apiKey);

export default getApiUrl;
