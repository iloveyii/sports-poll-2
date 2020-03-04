const request = require('supertest')
const app = require('../server')
describe('Game Endpoints', () => {
    it('should create a new game', async () => {
        const res = await request(app)
            .post('/api/v1/games')
            .send({
                "awayName": "Football away team",
                "createdAt": "2015-12-18T12:30:39.228Z",
                "group": "Greek Cup",
                "homeName": "Football home team",
                "id": 1002916450,
                "name": "Football away team - Football home team",
                "objectId": "1UaQjc7lIb",
                "sport": "FOOTBALL",
                "country": "ENGLAND",
                "state": "STARTED"
            });
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('game')
    })

    it('should fetch a game', async () => {
        const res = await request(app)
            .get('/api/v1/games')
            .send({});
        expect(res.statusCode).toEqual(200)
        expect(res.body[0]).toHaveProperty('awayName')
    })
});

