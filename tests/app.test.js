const request = require('supertest');
const fs = require('fs');
const createApp = require('../src/app');

let app;
beforeAll(async () => {
  app = await createApp();
});

describe('Integration tests', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    const fileContent = fs.readFileSync('./src/client/index.html', 'utf8');

    expect(response.status).toBe(200);
    expect(response.text).toEqual(fileContent);
  });

  test('It should response the GET admin method', async () => {
    const response = await request(app).get('/admin');
    const fileContent = fs.readFileSync('./src/admin/index.html', 'utf8');

    expect(response.status).toBe(200);
    expect(response.text).toEqual(fileContent);
  });
});
