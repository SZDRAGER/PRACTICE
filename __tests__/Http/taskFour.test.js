import fs from 'fs';
import url from 'url';
import axios from 'axios';
import httpHeaders from 'http-headers';
import httpStringParser from 'http-string-parser';

const { parseRequest } = httpStringParser;

describe('request', () => {
  const data = fs.readFileSync('solution', 'utf-8');
  const requestObj = httpHeaders(
    data
      .split('\n')
      .map((el) => el.trim())
      .join('\r\n'),
  );

  let options;

  it('check version', async () => {
    expect(requestObj.version).toEqual({ major: 1, minor: 1 });
  });

  it('should work', async () => {
    const { body } = parseRequest(data);

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

    options = {
      method: requestObj.method,
      headers,
      data: body.trim(),
      url: requestUrl,
    };

    const { status, statusText } = await axios(options);
    const result = { status, statusText };
    expect(result).toMatchObject({ status: 200 });
  });

  it('request length', async () => {
    const requestLength = Number(options.headers['content-length']);
    expect(options.data.length).toEqual(requestLength);
  });

  it('content type', async () => {
    const contentType = options.headers['content-type'];
    expect(contentType).toEqual('application/x-www-form-urlencoded');
  });
});
