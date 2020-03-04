const request = require('supertest')
const app = require('../server')
describe('Game Endpoints', () => {
    it('should create a new game', async () => {
        const res = await request(app)
            .post('/api/v1/games')
            .send({
                "awayName": "Panthrakikos Komotini",
                "createdAt": "2015-12-18T12:30:39.228Z",
                "group": "Greek Cup",
                "homeName": "Chania FC",
                "id": 1002916450,
                "name": "Chania FC - Panthrakikos Komotini",
                "objectId": "1UaQjc7lIb",
                "sport": "FOOTBALL",
                "country": "ENGLAND",
                "state": "STARTED"
            });
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('game')
    })
});

