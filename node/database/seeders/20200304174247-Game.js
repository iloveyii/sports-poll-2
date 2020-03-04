'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Games', [
            {
                "awayName": "Panthrakikos Komotini",
                "createdAt": "2015-12-18T12:30:39.228Z",
                "group": "Greek Cup",
                "homeName": "Chania FC",
                "id": 1002916450,
                "name": "Chania FC - Panthrakikos Komotini",
                "sport": "FOOTBALL",
                "country": "ENGLAND",
                "state": "STARTED"
            },
            {
                "awayName": "PAOK Thessaloniki",
                "createdAt": "2015-12-18T12:30:39.234Z",
                "group": "Greek Cup",
                "homeName": "Olympiakos Volos",
                "id": 1002916451,
                "name": "Olympiakos Volos - PAOK Thessaloniki",
                "sport": "FOOTBALL",
                "country": "FRANCE",
                "state": "STARTED"
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('Game', null, {});
    }
};
