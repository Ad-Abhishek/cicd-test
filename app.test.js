const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should respond with status code 200"', async () => {
    const response = await request(app).get('/ping');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /', () => {
  it('should respond with "Pong!"', async () => {
    const response = await request(app).get('/ping');
    expect(response.text).toBe('Pong!');
  });
});
