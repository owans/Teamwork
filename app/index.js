const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = () => {
    const app = express();
    const baseURL = '/api/v1'
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.use(morgan('tiny'));

    app.get(`${baseURL}/`, function(req, res){
        res.send('welcome to teamwork API');
    });

    return app;
}