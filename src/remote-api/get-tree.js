const BASE_HOST = process.env.REACT_APP_BACKEND_PATH;

const options = { method: 'GET', headers: { Accept: 'text/plain' } };

export default expression =>
  fetch(encodeURI(`${BASE_HOST}/parser/tree?expression=${expression}`), options);
