const express = require('express');
const morgan = require('morgan');

module.exports = () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(morgan('tiny'));

    app.get('/', function(req, res){
        res.send('Hello World');
    });

    return app;
}