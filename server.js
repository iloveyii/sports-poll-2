// Import required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Pool = require('pg').Pool

const pool = new Pool({
    url: 'postgres://ngnfhein:RPw8Gl...@drona.db.elephantsql.com:5432/ngnfhein',
    user: 'ngnfhein',
    host: 'drona.db.elephantsql.com',
    database: 'ngnfhein',
    password: 'password',
    port: 5432,
});

var pg = require('pg');
var conString = "postgres://ngnfhein:RPw8GlvfDa26UcZmyG82trgJsgOBFyPZ@drona.db.elephantsql.com:5432/ngnfhein";

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


app.get('/',  (req, res)=> {
    const paths = app._router.stack
    const defined_paths = []
    // console.log(Object.keys(paths))
    paths.forEach(p => {
        if(p.route && p.route.path) {
            defined_paths.push({
                path: p.route.path,
                method: p.route.stack[0].method
            })
        }
    });
    return res.json({paths: defined_paths})
});
app.get('/api/v1/games',  (req, res)=> {
    client.query('SELECT * FROM "public"."Games"  ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});
/**
 "awayName": "Panthrakikos Komotini",
 "group": "Greek Cup",
 "homeName": "Chania FC",
 "name": "Chania FC - Panthrakikos Komotini",
 "sport": "FOOTBALL",
 "country": "ENGLAND",
 "state": "STARTED"
 */
app.post('/api/v1/games',  (req, res)=> {
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

app.delete('/api/v1/games/:id',  (req, res)=> res.json({game: 1}));
app.put('/api/v1/games/:id',  (req, res)=> res.json({game: 1}));


app.listen(8080, () => console.log('Server started on port ' + 8080));

module.exports = app
