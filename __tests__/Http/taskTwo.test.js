import fs from 'fs';
import url from 'url';
import axios from 'axios';
import httpHeaders from 'http-headers';

test('should work', async () => {
  const data = fs.readFileSync('solution', 'utf-8');
  const requestObj = httpHeaders(
    data
      .split('\n')
      .map((el) => el.trim())
      .join('\r\n'),
  );

  expect(requestObj.version).toEqual({ major: 1, minor: 1 });

  const parts = {
    port: 8080,
    protocol: 'http',
    hostname: 'localhost',
    pathname: requestObj.url,
  };
  const requestUrl = url.format(parts);

  const headers = Object.entries(requestObj.headers)
    .reduce((acc, [header, value]) => (
      { ...acc, [header]: value.split(',').join('; ') }
    ), {});

  const options = {
    headers,
    method: requestObj.method,
    url: requestUrl,
  };

  const { config: { method }, status, statusText } = await axios(options);
  const result = { method, status, statusText };
  expect(result).toMatchObject({ status: 200, method: 'get' });
});
