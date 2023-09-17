const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

var port = process.env.PORT || 3000;

// Securyity
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Endpoints
app.get('/', (req, res) => {
    res.json({
        "message": "Check oficial endpoints!"
    });
});
app.get('/users/:nombre', (req, res) => {
    var nombre = req.params.nombre;
    response = {
        "status-code": 200,
        "description": "Done!",
        "message": `Hello there ${nombre}`
    };
    res.status(200).send(response);    

});
app.post('/users/', (req, res) => {
    response = {
        "status-code": 200,
        "description": "Post request done!",
        "message": req.body
    };
    res.status(200).send(response);    
});
app.put('/users', (req, res) => {
    response = {
        "status-code": 200,
        "description": "Put request done!",
        "message": req.body
    };
    res.status(200).send(response);    
});
app.delete('/users', (req, res) => {
    response = {
        "status-code": 200,
        "description": "Done request done!",
        "message": req.body
    };
    res.status(200).send(response);    
});

app.listen(port, () =>{
    console.log('App listening on %s port!', port);
});