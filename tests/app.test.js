const request = require('supertest');
const createApp = require('../src/app');

let app;
beforeAll(async () => {
  app = await createApp();
});

describe('Integration tests', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/hello');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      "message": "hello, man"
    });
  });
});
