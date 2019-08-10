const request = require('supertest');
const server = require('./server/index.js');

test('express server exists', () => {
    expect(!!server).toBe(true);
});

test('server responds to GET /', (done) => {
    request(server).get('/')
    .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
    });
});
