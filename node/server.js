// Import required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Pool = require('pg').Pool
const Sequelize = require('sequelize')
let conString = "postgres://ngnfhein:RPw8GlvfDa26UcZmyG82trgJsgOBFyPZ@drona.db.elephantsql.com:5432/ngnfhein";
conString = "postgres://postgres:root1@3@localhost:5432/sports";
const sequelize = new Sequelize(conString);
const Model = Sequelize.Model;
const GameModel = require('./database/models/game')

class Game extends Model {
}

// Test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // Find all games
        Game.init({
            awayName: {type: Sequelize.STRING, allowNull: true},
            homeName: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            group: Sequelize.STRING,
            id: {type: Sequelize.INTEGER, primaryKey: true},
            name: Sequelize.STRING,
            sport: Sequelize.STRING,
            country: Sequelize.STRING,
            state: Sequelize.STRING
        }, {
            sequelize,
            modelName: "Games"
        })
        //Game.findAll().then(games => {
            // console.log("All games:", JSON.stringify(games, null, 4));
        //});
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const pool = new Pool({
    url: 'postgres://ngnfhein:RPw8Gl...@drona.db.elephantsql.com:5432/ngnfhein',
    user: 'ngnfhein',
    host: 'drona.db.elephantsql.com',
    database: 'ngnfhein',
    password: 'password',
    port: 5432,
});

var pg = require('pg');

var client = new pg.Client(conString);
client.connect();

app.use(
    express.static(__dirname + '/public'),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json(),
    cors(),
    (req, res, next) => {
        // req.body.title = 'I changed it here in mw';
        // console.log('Inside middleware request body is : ', req);
        next();
    }
);


app.get('/', (req, res) => {
    const paths = app._router.stack
    const defined_paths = []
    // console.log(Object.keys(paths))
    paths.forEach(p => {
        if (p.route && p.route.path) {
            defined_paths.push({
                path: p.route.path,
                method: p.route.stack[0].method
            })
        }
    });
    return res.json({paths: defined_paths})
});
app.get('/api/v1/games', (req, res) => {
    console.log('GET api/v1/games')
    const game = GameModel(sequelize, Sequelize)
    game.findAll().then( games => res.status(200).json(games))
});

app.post('/api/v1/games', (req, res) => {
    const {awayName, group, homeName, name, sport, country, state} = req.body;
    client.query(
        `INSERT INTO 
          public."Games"("awayName", "group", "homeName", "name", "sport", "country", "state") 
          VALUES('${awayName}', '${group}','${homeName}','${name}','${sport}', '${country}', '${state}')
          `);
    console.log(req.body)
    console.log(awayName, group, homeName, name, sport, country, state)
    res.status(201).json({game: 1});
});

app.delete('/api/v1/games/:id', (req, res) => res.json({game: 1}));
app.put('/api/v1/games/:id', (req, res) => res.json({game: 1}));


app.listen(8080, () => console.log('Server started on port ' + 8080));

module.exports = app
