import fs from 'fs';
import url from 'url';
import axios from 'axios';
import httpHeaders from 'http-headers';

test('should work', async () => {
  const data = fs.readFileSync('solution', 'utf-8');
  const requestObj = httpHeaders(data);

  expect(requestObj.version).toEqual({ major: 1, minor: 0 });

  const parts = {
    port: 8080,
    protocol: 'http',
    hostname: 'localhost',
    pathname: requestObj.url,
  };
  const requestUrl = url.format(parts);

  const options = {
    headers: requestObj.headers,
    method: requestObj.method,
    url: requestUrl,
  };

  const { config: { method }, status, statusText } = await axios(options);
  const result = { method, status, statusText };
  expect(result).toMatchObject({ status: 200, method: 'get' });
});
