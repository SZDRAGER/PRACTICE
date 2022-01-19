/* 
Implement an abstraction to work with urls. It should extract and change parts of the address. Interface:

  make(url) - Constructor. Creates an url.
  setProtocol(data, protocol) - Setter. Changes the schema.
  getProtocol(data) - Selector (getter). Retrieves the schema.
  setHost(data, host) - Setter. Changes host.
  getHost(data) - Getter. Retrieves a host.
  setPath(data, path) - Setter. Changes the query string.
  getPath(data) - Getter. Retrieves a query string.
  setQueryParam(data, key, value) - Setter. Sets a value for a request parameter.
  getQueryParam(data, paramName, default = null) - Getter. Retrieves the value for a request parameter. As the third parameter, the function takes a default value, which is returned when there was no such parameter in the request.
  toString(data) - Getter. Converts url to string form. 
});
*/
const make = (url) => {
  const data = new URL(url);
  return data;
};

const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};
const getProtocol = (data) => data.protocol;

const setHost = (data, host) => {
  data.host = host;
};

const getHost = (data) => data.host;

const setPath = (data, path) => {
  data.pathname = path;
};

const getPath = (data) => data.pathname;

const setQueryParam = (data, key, value) => {
  data.searchParams.set(key, value);
};

const getQueryParam = (data, paramName, defaultValue = null) => (
  data.searchParams.get(paramName) ?? defaultValue
);

const toString = (data) => data.href;

export {
  make,
  setProtocol,
  getProtocol,
  setHost,
  getHost,
  setPath,
  getPath,
  setQueryParam,
  getQueryParam,
  toString,
};
