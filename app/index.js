const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const cors = require('cors');
const initDB = require('../database/initDB');

module.exports = () => {
    const app = express();
    const baseURL = '/api/v1'
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.use(morgan('tiny'));

    initDB();

    app.get(`${baseURL}/`, function(req, res){
        res.json({message: 'welcome to teamwork API'});
    });

    return app;
}