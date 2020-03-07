// Import required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//let conString = "postgres://ngnfhein:RPw8GlvfDa26UcZmyG82trgJsgOBFyPZ@drona.db.elephantsql.com:5432/ngnfhein";
//conString = "postgres://postgres:root1@3@localhost:5432/sports";
const Game = require('./database/models').Game
const _ = require('lodash')


const testConn = async () => {
    // Test connection
    await sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })
}

//testConn();


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
    Game.findAll().then(games => res.status(200).json(games))
});

app.get('/api/v1/random-games', (req, res) => {
    console.log('GET api/v1/random-games')
    Game.findAll().then(games => {
        const sports = _.uniq(_.map(games, 'sport'))
        const rand_sport_id = _.random(0, sports.length-1)
        console.log(sports, rand_sport_id)
        const sport_selected = sports[rand_sport_id]
        Game.findAll({where: {sport: sport_selected}}).then(sports => res.status(200).json(sports))
    })
});

app.get('/api/v1/games/:id', (req, res) => {
    console.log('GET api/v1/games/:id')
    const id = req.params.id ? req.params.id : null
    console.log('ID: ', id)
    Game.findOne({where: {id: id}}).then(game => res.status(200).json(game))
});

app.post('/api/v1/games', (req, res) => {
    const {awayName, group, homeName, name, sport, country, state} = req.body;
    Game.create({
        awayName: awayName, group: group, homeName: homeName, name: name, sport: sport, country: country, state: state
    }).then(r => res.status(201).json({game: r}));
});

app.delete('/api/v1/games/:id', (req, res) => res.json({game: 1}));
app.put('/api/v1/games/:id', (req, res) => res.json({game: 1}));

app.post('/api/v1/login', (req, res) => res.json({game: 1}));

app.listen(8080, () => console.log('Server started on port ' + 8080));

module.exports = app
