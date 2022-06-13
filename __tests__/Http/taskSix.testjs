import fs from 'fs';
import url from 'url';
import axios from 'axios';
import httpHeaders from 'http-headers';

describe('request', () => {
  const data = fs.readFileSync('solution', 'utf-8');
  const requestObj = httpHeaders(
    data
      .split('\n')
      .map((el) => el.trim())
      .join('\r\n'),
  );

  it('check version', async () => {
    expect(requestObj.version).toEqual({ major: 1, minor: 1 });
  });

  it('should work', async () => {
    const parts = {
      port: 8080,
      protocol: 'http',
      hostname: 'localhost',
      pathname: requestObj.url,
    };
    const requestUrl = decodeURIComponent(url.format(parts));

    const options = {
      method: requestObj.method,
      headers: requestObj.headers,
      url: requestUrl,
    };

    const { status, statusText } = await axios(options);
    const result = { status, statusText };
    expect(result).toMatchObject({ status: 200 });
  });
});
