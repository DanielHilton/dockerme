const axios = require('axios')

let server;

beforeAll(() => {
  server = require('./app.js');
})

afterAll(() => {
  if(server) {
    server.close();
  }
})

test('server returns 200 with hello world', async () => {
  const response = await axios('http://localhost:3000');

  expect(response.status).toBe(200);
  expect(response.data).toBe('Hello World!')
});
