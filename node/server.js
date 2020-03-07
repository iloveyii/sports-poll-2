// Import required packages
require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const _ = require('lodash')
const session = require('express-session')
const Game = require('./database/models').Game
const Login = require('./database/models').Login


const {
    PORT = 8080,
    SESS_NAME = 'sid',
    SESS_SECRET = 'thisisasecret',
    SESS_LIFETIME = 1000 * 60 * 60 * 2, // 2 hrs
} = process.env

app.use(
    express.static(__dirname + '/public'),
    bodyParser.urlencoded({extended: true}),
    bodyParser.json(),
    cors(),
    session({
        name: SESS_NAME,
        resave: false,
        saveUninitialized: false,
        secret: SESS_SECRET,
        cookie: {
            maxAge: SESS_LIFETIME,
            sameSite: true,
            secure: false
        }
    })
);

const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/api/v1/login')
    } else {
        next()
    }
}


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

app.get('/api/v1/random-games', redirectLogin, (req, res) => {
    console.log('GET api/v1/random-games')
    Game.findAll().then(games => {
        const sports = _.uniq(_.map(games, 'sport'))
        const rand_sport_id = _.random(0, sports.length - 1)
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

app.get('/api/v1/login', (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/api/v1/login" method="post">
                    <input type="email" required name="email" placeholder="Email" />
                    <input type="password" required name="password" placeholder="Password" />
                    <button type="submit"> Login </button>
                </form>
                <a href="/api/v1/register">Register</a>
            </body>
        </html>
    `)
});

app.post('/api/v1/login', (req, res) => {
    const {email, password} = req.body
    Login.findOne({where: {email: email, password: password}}).then(user => {
        if (user) {
            req.session.userId = user.id
            return res.redirect('/api/v1/random-games')
        }
        return res.redirect('/api/v1/login')
    })
});


app.get('/api/v1/register', (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/api/v1/register" method="post">
                    <input type="text" required name="username" placeholder="Username" />
                    <input type="email" required name="email" placeholder="Email" />
                    <input type="password" required name="password" placeholder="Password" />
                    <button type="submit"> Register </button>
                </form>
                <a href="/api/v1/login">Login</a>
            </body>
        </html>
    `)
});

app.post('/api/v1/register', (req, res) => {
    const {username, email, password} = req.body
    Login.findOne({where: {email: email}}).then(user => {
        if (user) {
            return res.send(`
                <h1>This email is already registered</h1>
                <a href="/api/v1/login">Login</a>
            `)
        } else {
            Login.create({
                email: email, password: password
            }).then(r => res.send(`
                <h1>User successfully registered</h1>
                <a href="/api/v1/login">Login</a>
            `));
        }
    })
});

app.listen(PORT, () => console.log('http://locahost:' + PORT));

module.exports = app
