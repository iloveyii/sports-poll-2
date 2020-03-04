// Import required packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.get('/api/v1/games',  (req, res)=> res.json({game: 1}));
app.post('/api/v1/games',  (req, res)=> res.json({game: 1}));
app.delete('/api/v1/games/:id',  (req, res)=> res.json({game: 1}));
app.put('/api/v1/games/:id',  (req, res)=> res.json({game: 1}));


app.listen(8080, () => console.log('Server started on port ' + 8080));

module.exports = app
